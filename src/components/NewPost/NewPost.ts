import { useForm } from "react-hook-form";
import NewPostStyled from "./NewPostStyled";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import { successToast, errorToast } from "../Utilities/toasts";
import { getTopics } from "../../api/postApi";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/slices/posts";

const NewPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const userData = useSelector((state) => state.auth.data);
  console.log(userData?.userData?.name);

  const [topicData, setTopicData] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {},
  });

  useEffect(() => {
    if (!userData) {
      navigate("/auth", { replace: true });
      errorToast(
        "Please, log in. Post creteion is allowed only for authentificated users"
      );
    }
  }, []);

  const topicTitle = topics.map((item) => ({
    label: item.title,
    value: item.id,
  }));

  const submitPosts = async (value) => {
    try {
      const body = { ...value, userId: userData.id, topicId: topicData.value };
      dispatch(addPost(body)).unwrap();
      successToast("Post is created");
      navigate("/");
    } catch (err) {
      errorToast(err.data);
    }
  };

  const handleSelectTopic = (theme) => {
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
      } catch (err) {
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
              type="text"
              {...register("postText", { required: true })}
              placeholder="Enter your post here..."
            />
            <Select
              className="post-select"
              options={topicTitle}
              onChange={(value) => handleSelectTopic(value)}
              placeholder="Select topic..."
              value={topicData}
              required="true"
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
