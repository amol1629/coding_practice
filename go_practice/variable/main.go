/*
	* Basic Naming Conventions in Go
		==> Package names should be all lowercase and should not contain underscores or mixed caps.
		==> Variable names should be descriptive and follow camelCase or snake_case conventions.
		==> Constants should be in all uppercase letters with underscores separating words.
		==> Function names should be descriptive and follow camelCase convention.
		==> Struct names should be in PascalCase (first letter of each word capitalized).
		==> Interface names should be in PascalCase and should describe the behavior of the interface.
		==> File names should be descriptive and should end with .go extension.


	? Variable Naming Conventions:
		==> Variable names should be in lowercase letters (e.g., myVariable). They should not contain underscores or mixed caps.
		==> Variable names should be descriptive and follow camelCase or snake_case conventions.
		==> * Use camelCase for variable names (e.g., myVariable).
		==> Use short but meaningful names for variables (e.g., i for index, err for error).
		==> Avoid using single-letter variable names except for loop counters.
		==> Use descriptive names for constants (e.g., MaxValue, DefaultTimeout).
		==> Use underscores to separate words in constant names (e.g., MAX_VALUE).
		==> Use all uppercase letters for constant names (e.g., MAX_VALUE).
*/

package main

import "fmt"

func main(){
	var name string = "Tony Stark"
	var age int = 25
	fmt.Println("My name is : ", name)
	fmt.Println("My age is : ", age)
}