import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TYPES,
  createProject,
  updateProject,
} from '../redux/actions/cardAction';

const NewProject = () => {
  const alert = useSelector((state) => state.alert);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const initialState = {
    projectName: '',
    description: '',
    projectlink: '',
  };
  const [randomImages, setRandomImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [projectData, setProjectData] = useState(initialState);
  const { projectName, description, projectlink } = projectData;

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch(
          'https://picsum.photos/v2/list?page=1&limit=6'
        );
        const data = await response.json();
        setRandomImages(data);
        // Select a random image from the array
        const randomIndex = Math.floor(Math.random() * data.length);
        setSelectedImage(data[randomIndex]);
      } catch (error) {
        console.error('Error fetching random image:', error);
      }
    };

    fetchRandomImage();
  }, []);
  console.log(randomImages, selectedImage);
  useEffect(() => {
    if (status?.onEdit) {
      setProjectData(status?.project);
    }
  }, [status]);

  // Change the value of the input fields
  const handleInputChange = ({ target: { name, value } }) => {
    setProjectData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Create a new project
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      ...projectData,
      image: selectedImage?.download_url,
    };

    if (status?.onEdit) {
      dispatch(updateProject(newProject));
    } else {
      dispatch(createProject(newProject));
    }
  };

  // Cancel the creation of a new project
  const handleCancel = () => {
    dispatch({
      type: TYPES.STATUS,
      payload: false,
    });
  };

  return (
    <div className='newproject'>
      <div className='newproject_wrapper'>
        <div className='newproject_top'>
          <h2>Create a new project</h2>
          <span className='newproject_top-close' onClick={handleCancel}>
            &times;
          </span>
        </div>
        <form className='newproject_content' onSubmit={handleSubmit}>
          <div className='newproject_content-item'>
            <label htmlFor=''>Project name</label>
            <input
              type='text'
              placeholder='My awesome project'
              name='projectName'
              value={projectName}
              onChange={handleInputChange}
              maxLength={30}
            />
            <span>{projectName?.length}/30</span>
            <small>{alert?.projectName ? alert?.projectName : ''}</small>
          </div>

          <div className='newproject_content-item'>
            <label htmlFor=''>Description</label>
            <textarea
              name='description'
              id='description'
              placeholder='Describe your project here'
              value={description}
              onChange={handleInputChange}
              maxLength={100}
            />
            <span>{description?.length}/100</span>
            <small>{alert?.description ? alert?.description : ''}</small>
          </div>

          <div className='newproject_content-item'>
            <label htmlFor=''>
              Project link <span>(optional)</span>
            </label>
            <input
              type='text'
              name='projectlink'
              placeholder='e.g. http://www.myproject.com'
              value={projectlink}
              onChange={handleInputChange}
            />
            <small>{alert?.projectlink ? alert?.projectlink : ''}</small>
          </div>

          <div className='newproject_content-btns'>
            <button
              className='newproject_content-btn cancel-btn'
              type='reset'
              onClick={handleCancel}>
              Cancel
            </button>
            <button className='newproject_content-btn create-btn' type='submit'>
              {status?.onEdit ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProject;
