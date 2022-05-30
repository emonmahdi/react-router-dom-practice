import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis
        quibusdam aut soluta vel, maiores earum enim ullam velit ea dolorum
        voluptates quo eligendi pariatur! Laboriosam doloremque reprehenderit
        fugit. Asperiores dignissimos facilis dolores delectus, dolorem at?
        Perferendis nisi totam soluta? Non aliquid repellendus explicabo. Nobis,
        fuga accusamus sunt a eaque excepturi nostrum eius quasi assumenda
        veritatis error libero modi non?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        nobis aspernatur amet aliquid eum! Architecto aut totam, esse odit ex
        doloribus nobis minus debitis est, enim fuga quae quasi tempora delectus
        laboriosam animi ratione!
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go To Home Page
      </button>
    </div>
  );
};

export default Contact;
