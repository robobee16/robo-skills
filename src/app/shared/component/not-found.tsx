import React, { forwardRef, memo } from "react";
import { Link } from "react-router-dom";

interface Props {}

export interface Ref {}

export const NotFound = memo(
  forwardRef<Ref, Props>(() => {
    return (
      <div role="alert">
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
      </div>
    );
  })
);
