import NewPostStyled from "./NewPostStyled";

import { Button } from "antd";

import { useForm } from "react-hook-form";
import Select from "react-select";

import { useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";

import { successToast, errorToast } from "../../utils/toasts/toasts";

import { getTopics } from "../../api/postApi";
import { addPost } from "../../redux/slices/posts";
import NewPostHead from "./NewPostHead/NewPostHead";

import { Post, SelectorType } from "../../types";

import { clearButton, SAVE_BUTTON } from "../../constants";

type TopicDataType = SelectorType | null;

interface ITopicTitle {
  [label: string]: string;
  [value: number]: string;
}
const NewPost: FC = () => {
  //need fix?
  const userData = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [topics, setTopics] = useState([]);
  const [topicData, setTopicData] = useState<TopicDataType>(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {} as Post, //fix
  });

  const topicTitle = topics.map((item: ITopicTitle) => ({
    label: item.title,
    value: item.id,
  }));

  useEffect(() => {
    if (!userData) {
      //fix type
      navigate("/auth", { replace: true });
      errorToast(
        "Please, log in. Post creation is allowed only for authentificated users"
      );
    }
  }, []);

  const submitPosts = async (value: Post) => {
    try {
      const body = {
        ...value,
        userId: userData?.id,
        topicId: topicData?.value,
      }; // type or not
      dispatch(addPost(body)).unwrap();
      successToast("Post is created");
      navigate("/");
    } catch (err: any) {
      console.log("submitPosts", err);
      errorToast(err.data);
    }
  };

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const result = await getTopics();
        setTopics(result.data);
      } catch (err: any) {
        errorToast(err.response.data.message);
        console.log("fetchTopics", err);
      }
    };
    fetchTopics();
  }, []);

  const handleSelectTopic = (theme: SelectorType | null) => {
    setTopicData(theme);
  };

  const resetSelections = () => {
    setTopicData(null);
    reset();
  };

  return (
    <NewPostStyled>
      <div className="post-area-global">
        <NewPostHead />
        <div className="post-body">
          <form onSubmit={handleSubmit(submitPosts)}>
            <div className="post-input__wrapper">
              <textarea
                className="post-input"
                {...register("postText", { required: true })}
                placeholder="Enter your post here..."
              />
            </div>
            <Select
              className="post-select"
              options={topicTitle}
              onChange={(value) => handleSelectTopic(value)}
              placeholder="Select topic..."
              value={topicData}
              required={true}
              classNamePrefix="custom-select"
            />
            <div className="post-author"> Author: {userData?.name}</div>
            <div className="post-buttons-wrap">
              <Button
                type="primary"
                className="post-save-button"
                htmlType="submit"
              >
                {SAVE_BUTTON}
              </Button>
              <Button
                className="post-save-button"
                onClick={resetSelections}
                type="primary"
              >
                {clearButton}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </NewPostStyled>
  );
};
export default NewPost;
