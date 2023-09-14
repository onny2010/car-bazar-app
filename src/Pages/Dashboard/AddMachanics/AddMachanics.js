import React from "react";
import { Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddMachanics = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
      fetch(`https://car-bazar-server-site.vercel.app/mechanic`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Mechanics added successfully");
            reset();
          }
        });
  };
  return (
    <Container>
      <h1 className="text-center fw-bold my-4">Insert a new Mechanic</h1>
      <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
        <label>Machanic Name</label>
        <input
          className="form-control mb-3"
          {...register("name", { required: true })}
        />
        <label>Mechanics Image Link</label>
        <input
          className="form-control mb-3"
          {...register("img", { required: true })}
        />
        <label>Mechanics Charge</label>
        <input
          type="number"
          className="form-control mb-3"
          {...register("price", { required: true })}
        />
        <label>About him</label>
        <textarea
          className="form-control mb-3"
          {...register("description", { required: true })}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default AddMachanics;
