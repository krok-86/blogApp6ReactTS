import { useForm } from "react-hook-form";
import NewPostStyled from "./NewPostStyled";
import { FC, useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import { successToast, errorToast } from "../Utilities/toasts";
import { getTopics } from "../../api/postApi";
import { addPost } from "../../redux/slices/posts";
import { useAppDispatch, useAppSelector } from "../../hook";
import { Post, SelectorType } from "../../types";

type TopicDataType = SelectorType | null;

const NewPost: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const userData = useAppSelector((state) => state.auth.data);
  console.log(userData);

  const [topicData, setTopicData] = useState<TopicDataType>(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {} as Post,
  });

  useEffect(() => {
    if (!userData) {
      navigate("/auth", { replace: true });
      errorToast(
        "Please, log in. Post creteion is allowed only for authentificated users"
      );
    }
  }, []);

  interface ITopicTitle {
    [label: string]: string;
    [value: number]: string; //fix?
  }
  const topicTitle = topics.map((item: ITopicTitle) => ({
    label: item.title,
    value: item.id,
  }));

  const submitPosts = async (value: Post) => {
    try {
      const body = {
        ...value,
        userId: userData?.id,
        topicId: topicData?.value,
      };
      dispatch(addPost(body)).unwrap();
      successToast("Post is created");
      navigate("/");
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  const handleSelectTopic = (theme: SelectorType | null) => {
    console.log(typeof theme);
    setTopicData(theme);
  };

  const resetSelections = () => {
    setTopicData(null);
    reset();
  };

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const result = await getTopics();
        setTopics(result.data);
      } catch (err: any) {
        errorToast(err.response.data.message);
        console.log(">>>>>>", err);
      }
    };
    fetchTopics();
  }, []);

  return (
    <NewPostStyled>
      <div className="post-area">
        <div className="post-head">Add new post:</div>
        <div className="post-body">
          <form onSubmit={handleSubmit(submitPosts)}>
            <textarea
              className="post-input"
              {...register("postText", { required: true })}
              placeholder="Enter your post here..."
            />
            <Select
              className="post-select"
              options={topicTitle}
              onChange={(value) => handleSelectTopic(value)}
              placeholder="Select topic..."
              value={topicData}
              required={true}
            />
            <div className="post-author"> Author: {userData?.name}</div>
            <div className="post-buttons">
              <Button className="post-button" name="Save" />
              <Button
                className="post-button post-button__clear"
                handleClick={resetSelections}
                name="Clear post"
              />
            </div>
          </form>
        </div>
      </div>
    </NewPostStyled>
  );
};
export default NewPost;
