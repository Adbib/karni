import React from "react";

type Props = {};

export default function SocialShare({}: Props) {
  return (
    <div className="social">
      <a href="#">
        <i className="fa fa-facebook"></i>
      </a>
      <a href="#">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="#">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="#">
        <i className="fa fa-whatsapp"></i>
      </a>
    </div>
  );
}
