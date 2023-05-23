import { useState, useContext } from "react";
import { Grid, Button, TextField, LinearProgress } from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import Axios from "axios";

import { SetPopupContext } from "../App";

const FileUploadInput = (props) => {
  const setPopup = useContext(SetPopupContext);

  const { uploadTo, identifier, handleInput } = props;

  const [file, setFile] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  // const handleUpload = () => {
  //   // console.log(file);
  //   const data = new FormData();
  //   data.append("file", file);
  //   console.log("-------------------------------------------------");
  //   console.log("file:", file);
  //   console.log("-------------------------------------------------");

  //   Axios.post(uploadTo, data, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //     onUploadProgress: (progressEvent) => {
  //       setUploadPercentage(
  //         parseInt(
  //           Math.round((progressEvent.loaded * 100) / progressEvent.total)
  //         )
  //       );
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //       handleInput(identifier, response.data.url);
  //       setPopup({
  //         open: true,
  //         severity: "success",
  //         message: response.data.message,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("error has occured", err);
  //       setPopup({
  //         open: true,
  //         severity: "error",
  //         message: "failed to upload file",
  //         // message: err.response,
  //         // message: err.response.statusText,
  //         //   message: err.response.data
  //         //     ? err.response.data.message
  //         //     : err.response.statusText,
  //       });
  //     });
  //   console.log("error while uploading handle upload");
  // };

  const handleUpload = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      // console.log("-------------------------------------------------");
      // console.log("file:", file);
      // console.log("-------------------------------------------------");

      const response = await Axios.post(uploadTo, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },
      });

      console.log(response.data);
      handleInput(identifier, response.data.url);
      setPopup({
        open: true,
        severity: "success",
        message: response.data.message,
      });
    } catch (err) {
      console.log("Error has occurred", err);
      setPopup({
        open: true,
        severity: "error",
        message: "Failed to upload file",
      });
    }
    // console.log("Error while uploading handleUpload");
  };

  return (
    <Grid container item xs={12} direction="column" className={props.className}>
      <Grid container item xs={12} spacing={0}>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            component="label"
            style={{ width: "100%", height: "100%" }}
          >
            {props.icon}
            <input
              type="file"
              style={{ display: "none" }}
              onChange={(event) => {
                // console.log("--------------------------------------------->");
                console.log(event.target.files[0]);
                setUploadPercentage(0);
                setFile(event.target.files[0]);
              }}
              // onChange={onChange}
              // onChange={
              //   (e) => {}
              //   //   setSource({ ...source, place_img: e.target.files[0] })
              // }
            />
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={props.label}
            value={file ? file.name || "" : ""}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "100%", height: "100%" }}
            onClick={() => handleUpload()}
            disabled={file ? false : true}
          >
            <CloudUpload />
          </Button>
        </Grid>
      </Grid>
      {uploadPercentage !== 0 ? (
        <Grid item xs={12} style={{ marginTop: "10px" }}>
          <LinearProgress variant="determinate" value={uploadPercentage} />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default FileUploadInput;

// import { useState, useContext } from "react";
// import { Grid, Button, TextField, LinearProgress } from "@material-ui/core";
// import { CloudUpload } from "@material-ui/icons";
// import Axios from "axios";

// import { SetPopupContext } from "../App";

// const FileUploadInput = (props) => {
//   const setPopup = useContext(SetPopupContext);

//   const { uploadTo, identifier, handleInput } = props;

//   const [file, setFile] = useState("");
//   const [uploadPercentage, setUploadPercentage] = useState(0);

//   const handleUpload = (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("file", file);
//     console.log("uploadTo", file);
//     Axios.post(uploadTo, data, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       onUploadProgress: (progressEvent) => {
//         setUploadPercentage(
//           parseInt(
//             Math.round((progressEvent.loaded * 100) / progressEvent.total)
//           )
//         );
//       },
//     })
//       .then((response) => {
//         handleInput(identifier, response.data.url);
//         setPopup({
//           open: true,
//           severity: "success",
//           message: response.data.message,
//         });
//       })
//       .catch((err) => {
//         console.log("error has occurred", err);
//         const errorMessage = err.response
//           ? err.response.data.message || err.response.statusText
//           : err.message;
//         setPopup({
//           open: true,
//           severity: "error",
//           message: errorMessage,
//         });
//       });
//   };

//   return (
//     <Grid container item xs={12} direction="column" className={props.className}>
//       <Grid container item xs={12} spacing={0}>
//         <Grid item xs={3}>
//           <Button
//             variant="contained"
//             color="primary"
//             component="label"
//             style={{ width: "100%", height: "100%" }}
//           >
//             {props.icon}
//             <input
//               type="file"
//               style={{ display: "none" }}
//               onChange={(event) => {
//                 setUploadPercentage(0);
//                 setFile(event.target.files[0]);
//               }}
//             />
//           </Button>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label={props.label}
//             value={file ? file.name || "" : ""}
//             InputProps={{
//               readOnly: true,
//             }}
//             variant="outlined"
//             style={{ width: "100%" }}
//           />
//         </Grid>
//         <Grid item xs={3}>
//           <Button
//             variant="contained"
//             color="secondary"
//             style={{ width: "100%", height: "100%" }}
//             onClick={(e) => handleUpload(e)}
//             disabled={!file}
//           >
//             <CloudUpload />
//           </Button>
//         </Grid>
//       </Grid>
//       {uploadPercentage !== 0 && (
//         <Grid item xs={12} style={{ marginTop: "10px" }}>
//           <LinearProgress variant="determinate" value={uploadPercentage} />
//         </Grid>
//       )}
//     </Grid>
//   );
// };

// export default FileUploadInput;
