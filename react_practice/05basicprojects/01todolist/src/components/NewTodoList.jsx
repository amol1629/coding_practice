import { useState } from "react";
// import "./styles.css";

const daysOfWeek = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

export default function App() {
	const [schedules, setSchedules] = useState([]);

	// Function to add a new schedule
	const addNewSchedule = () => {
		setSchedules([
			...schedules,
			{
				id: schedules.length + 1, // ID based on length
				day: "",
				startTime: "",
				endTime: "",
			},
		]);
	};

	// Function to update a schedule field
	const updateSchedule = (id, field, value) => {
		setSchedules((prevSchedules) =>
			prevSchedules.map((schedule) =>
				schedule.id === id ? { ...schedule, [field]: value } : schedule
			)
		);
	};

	// Function to remove a single schedule
	const removeSchedule = (id) => {
		setSchedules(schedules.filter((schedule) => schedule.id !== id));
	};

	// Function to clear all schedules
	const clearAllSchedules = () => {
		setSchedules([]);
	};

	console.log(schedules);
	return (
		<div>
			{/* Add New Button */}
			<button onClick={addNewSchedule}>Add New</button>

			<button style={{ margin: "0 20px" }} onClick={clearAllSchedules}>
				Clear All
			</button>

			{/* Clear All Button */}

			{/* Schedule List */}
			<div>
				{schedules.map((schedule) => (
					<div key={schedule.id}>
						{/* Day Selection */}

						<p>Day</p>
						<select
							value={schedule.day}
							onChange={(e) =>
								updateSchedule(
									schedule.id,
									"day",
									e.target.value
								)
							}
						>
							<option value="">Select Day</option>
							{daysOfWeek.map((day) => (
								<option key={day} value={day}>
									{day}
								</option>
							))}
						</select>

						{/* Start Time */}
						<label style={{ margin: "0 10px 0 20px" }}>
							Start Time
						</label>
						<input
							type="time"
							value={schedule.startTime}
							onChange={(e) =>
								updateSchedule(
									schedule.id,
									"startTime",
									e.target.value
								)
							}
						/>

						{/* End Time */}
						<label style={{ margin: "0 10px 0 20px" }}>
							End Time
						</label>
						<input
							type="time"
							value={schedule.endTime}
							onChange={(e) =>
								updateSchedule(
									schedule.id,
									"endTime",
									e.target.value
								)
							}
						/>

						{/* Remove Button (x) */}
						<button
							style={{ margin: "0 20px" }}
							onClick={() => removeSchedule(schedule.id)}
						>
							x
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
