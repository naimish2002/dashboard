const validation = ({ projectName, description, projectlink }) => {
  const err = {};

  if (!projectName) {
    err.projectName = 'Project name is required';
  } else if (projectName?.length > 30) {
    err.projectName = 'Project name is too long';
  } else if (projectName?.length < 6) {
    err.projectName = 'Project name is too short';
  }

  if (!description) {
    err.description = 'Description is required';
  } else if (description?.length > 100) {
    err.description = 'Description is too long';
  } else if (description?.length < 10) {
    err.description = 'Description is too short';
  }

  if (
    projectlink?.length > 0 &&
    !projectlink.startsWith('https://') &&
    !projectlink.startsWith('http://')
  ) {
    err.projectlink = 'Invalid URL';
  }

  return {
    errMsg: err,
    errLength: Object.keys(err)?.length,
  };
};

export default validation;
