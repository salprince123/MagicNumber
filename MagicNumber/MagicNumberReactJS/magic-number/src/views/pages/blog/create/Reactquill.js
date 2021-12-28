import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";

import ImageUploader from "quill-image-uploader";

Quill.register("modules/imageUploader", ImageUploader);

class QuillEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Test react quill"
    };
  }

  modules = {
    toolbar: [["bold", "italic", "image"]],
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("image", file);

          fetch(
            "https://api.imgbb.com/1/upload?key=d36eb6591370ae7f9089d85875e56b22",
            {
              method: "POST",
              body: formData
            }
          )
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
              resolve(result.data.url);
            })
            .catch((error) => {
              reject("Upload failed");
              console.error("Error:", error);
            });
        });
      }
    }
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "imageBlot"
  ];

  render() {
    return (
      <ReactQuill
        theme="snow"
        modules={this.modules}
        formats={this.formats}
        value={this.state.text}
      >
        <div className="editing-area" />
      </ReactQuill>
    );
  }
}

export default QuillEditor;