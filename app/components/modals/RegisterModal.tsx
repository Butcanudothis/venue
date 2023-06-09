"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from './Modal'
import Heading from "../Heading";
import Input from "../inputs/input";


const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col space-y-4">
      <Heading
      title="Welcome to Venue"
      subtitle="Create an account to continue"
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors = {errors}
        required
      />
    </div>
  );

  return (
    <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title = "Register"
        actionLabel="Continue"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body = {bodyContent}
        />
  );
};

export default RegisterModal;
