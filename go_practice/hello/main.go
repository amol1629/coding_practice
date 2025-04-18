/*
	* Author: Amol Rathod
	- Date: 2025-04-17
	- Description: A simple Go program that prints "Hello Go World" along with a number.
	- Purpose: To demonstrate the basic structure of a Go program and how to print output to the console.

	? Explanation of some key concepts:
			==> Package main: This is the entry point of the Go program. Every Go program must have a main package.
			==> Import "fmt": This imports the fmt package, which provides I/O formatting functions. In this case, it is used to print output to the console.
			==> func main(): This is the main function where the execution of the program begins.
			==> var number int = 10: This declares a variable named 'number' of type int and initializes it with the value 10.
			==> fmt.Println: This function prints the specified message to the console. In this case, it prints "Hello Go World" followed by the value of 'number'.


	* Usage:
			==> This program serves as a basic introduction to the Go programming language.
			==> To run the program, use the command: go run main.go
			==> It will output "Hello Go World 10" to the console.
	! Note:
			==> Make sure you have Go installed on your machine.
			==> You can download it from https://golang.org/dl/
*/

package main

import "fmt"

func main()  {
	var number int = 10;
	fmt.Println("Hello Go World", number);
}