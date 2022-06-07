import { Form, Input } from "antd";
import React from "react";
const SignIn = () => {
	const onFinish = () => {};
	const onFinishFailed = () => {};
	return (
		<div className="h-full">
			<div className="h-full md:h-screen min-h-screen flex text-vwhite">
				<div className="md:w-1/3 w-full bg-vblue h-full px-9 py-10">
					<div>
						<span className="font-monts text-[17px] leading-6 tracking-[.21em] font-medium">SME Better</span>
					</div>
					<div className="flex flex-col pt-8 h-full">
						<div className=" mb-6">
							<span className="text-[20px] leading-8">Log into your Business Manager</span>
						</div>
						<Form
							name="basic"
							layout="vertical"
							initialValues={{
								remember: true,
							}}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete="off"
							size="large"
						>
							<Form.Item
								name="email"
								label="Email Address"
								rules={[
									{
										required: true,
										message: "Please input your email!",
										type: "email",
									},
								]}
							>
								<Input placeholder="someone@email" />
							</Form.Item>

							<Form.Item
								label="Enter your password"
								name="password"
								rules={[
									{
										required: true,
										message: "Please input your password!",
									},
								]}
							>
								<Input.Password placeholder="Password" />
							</Form.Item>

							<Form.Item>
								<button
									type="submit"
									className="font-medium text-vwhite hover:text-vblue bg-vblue hover:bg-vwhite border border-white block w-full text-center py-2 px-8 rounded"
								>
									SIGN IN
								</button>
							</Form.Item>
						</Form>
						<div className="text-center flex flex-wrap justify-center items-center">
							<span className="opacity-60">Don't have an account? </span>
							<a href="/" className="ml-4 text-base text-vwhite font-medium">
								Sign Up
							</a>
						</div>
						<div className="text-center my-4">
							<a href="/" className=" text-base text-vwhite font-medium">
								Forgot password?
							</a>
						</div>
						<div className="flex justify-center items-center bg-vwhite py-2 px-8 rounded cursor-pointer">
							<img src="/google_signin.svg" alt="" />
							<span className="ml-4 opacity-95 text-vblack">Log in with Google</span>
						</div>
					</div>
				</div>
				<div className="bg-vwhite hidden md:flex md:w-2/3 flex-col items-center justify-center h-full">
					<div className="mb-12">
						<span className="text-vblue text-2xl">Organize your customer information</span>
					</div>
					<div className="max-w-md w-full">
						<img className="w-full" src="/undraw_people_search_wctu.svg" alt="" />
					</div>
					<div className="flex mt-8">
						<span className="w-1.5 h-1.5 bg-vblue rounded-full mx-0.5"></span>
						<span className="w-1.5 h-1.5 bg-vblue-2 rounded-full mx-0.5"></span>
						<span className="w-1.5 h-1.5 bg-vblue-2 rounded-full mx-0.5"></span>
						<span className="w-1.5 h-1.5 bg-vblue-2 rounded-full mx-0.5"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
