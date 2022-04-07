import React from "react";

type Props = {};

export default function SocialShare({}: Props) {
  return (
    <div className="social">
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=karny.org"
        target="_blank"
      >
        <i className="fa fa-facebook"></i>
      </a>
      <a
        href="https://twitter.com/intent/tweet?text=https://karny.org"
        target="_blank"
      >
        <i className="fa fa-twitter"></i>
      </a>
      {/* <a href="#">
        <i className="fa fa-instagram"></i>
      </a> */}
      <a
        href="whatsapp://send?text=https://karny.org"
        data-action="share/whatsapp/share"
      >
        <i className="fa fa-whatsapp"></i>
      </a>
    </div>
  );
}
