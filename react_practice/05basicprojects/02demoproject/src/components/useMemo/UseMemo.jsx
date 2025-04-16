import WithoutUseMemo from "./WithoutUseMemo";
import WithUseMemo from "./WithUseMemo";

export default function UseMemo() {
	console.log("UseMemo Rendered");
	return (
		<div>
			<WithUseMemo />
			<WithoutUseMemo num={30000000000} />
		</div>
	);
}
