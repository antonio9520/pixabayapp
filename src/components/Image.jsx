import React from "react";

const Image = ({ image }) => {
  const { largeImageURL, likes, previewURL, tags, views } = image;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top"></img>
        <div className="card-body">
          <p>{likes} Me Gusta</p>
          <p>{views} Vistas</p>
        </div>
        <div className="card-footer">
          <a
            className="btn btn-primary btn-block"
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Image;
