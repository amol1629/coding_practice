"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";
import Button from "@/components/Button";

export default function LoginPage() {
	const [form, setForm] = useState({ username: "", password: "" });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Logging in with:", form);
		toast.success("Login Successful!");
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-[#fffbfb] ">
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className=" p-8 rounded-2xl shadow-lg max-w-md w-full border border-gray-700"
			>
				<h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
					Welcome Back!
				</h2>
				<form onSubmit={handleSubmit} className="space-y-8">
					<motion.div
						whileHover={{ scale: 1.05 }}
						className="relative"
					>
						<label className="text-sm">Username</label>
						<input
							type="text"
							name="username"
							value={form.username}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 mt-1  border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.05 }}
						className="relative"
					>
						<label className="text-sm">Password</label>
						<input
							type="password"
							name="password"
							value={form.password}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 mt-1 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</motion.div>

					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="w-full py-2 mt-4 border-2 border-green-100 bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-semibold transition-all duration-300 ease-linear text-white"
					>
						Login
					</motion.button>
				</form>

				<Button variant="primary">Load More</Button>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}
					className="text-center text-sm mt-4"
				>
					New here?{" "}
					<Link
						href="/signup"
						className="text-blue-400 hover:underline"
					>
						Sign up
					</Link>
				</motion.p>
			</motion.div>
		</div>
	);
}
