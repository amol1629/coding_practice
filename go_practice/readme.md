# 📘 GoLang Naming Conventions & Project Structure Guide

Welcome to the ultimate beginner-friendly guide on Go (Golang) naming conventions, folder structures, and best practices. This document serves as a comprehensive reference while learning and writing clean, idiomatic Go code.

---

## 📦 Packages in Go

### ✅ What is a Package?

A **package** in Go is a way to group related Go files together. Every Go file must belong to a package.

* Package names are declared with the `package` keyword at the top of the file.
* The name should be the same as the folder name.

```go
// file: models/user.go
package models
```

### ✅ Naming Conventions

| Rule                  | Description                              | Example                        |
| --------------------- | ---------------------------------------- | ------------------------------ |
| Lowercase only        | Use only lowercase letters               | `models`,`auth`,`db`     |
| No special characters | Avoid `_`,`-`,`@`, etc.            | `userauth`,`jsonutils`     |
| No camelCase          | Don’t use capital letters or mixed case | ❌`UserAuth`, ✅`userauth` |
| Short & descriptive   | Keep names concise and meaningful        | ✅`config`,`routes`        |

> 📌 Packages can't start with a number or underscore and must only contain letters and numbers.

---

## 📁 Folder Structure in Go

### ✅ Typical Layout

```
myapp/
├── go.mod
├── main.go
├── config/
│   └── config.go
├── models/
│   └── user.go
├── handlers/
│   └── userhandler.go
└── utils/
    └── helpers.go
```

* Each folder represents a package.
* Folder names match package names and are in  **lowercase** .

---

## 📦 Modules in Go

### ✅ What is a Module?

A **module** is a collection of Go packages with a `go.mod` file defining the root of the project.

### ✅ Naming Conventions

| Rule                                  | Example                                          |
| ------------------------------------- | ------------------------------------------------ |
| Must look like import path            | `github.com/username/projectname`              |
| Use only lowercase, avoid underscores | `myproject`,`weatherapi`                     |
| Hyphens allowed in modules only       | `go mod init github.com/amoldev/hotel-booking` |

```bash
go mod init github.com/amoldev/myproject
```

> ❗ Don't use module names starting with digits or special characters.

---

## 🧱 Variable and Function Naming

| Rule                                  | Example                                |
| ------------------------------------- | -------------------------------------- |
| camelCase for variables and functions | `userName`,`getUserData()`         |
| PascalCase for exported functions     | `GetUser()`(visible outside package) |
| Avoid underscores                     | `get_user()`❌                       |
| Descriptive but concise               | `isValid`,`tempData`               |

### 🔐 Visibility Rules

| Type    | Starts With      | Visibility    |
| ------- | ---------------- | ------------- |
| Public  | Capital letter   | Exported      |
| Private | Lowercase letter | Package-local |

```go
func getUser() {} // private
func GetUser() {} // exported
```

### 🧮 Variable Declaration & Default Values

#### Declaration Styles:

```go
var name string = "Amol"      // explicit type
var age = 30                  // inferred type
name := "Amol"                // shorthand declaration
```



#### 🔎 Shorthand Variable Declaration (`:=`)

* You can use `:=`  **only inside functions** .
* The type is inferred automatically from the value.
* Used for  **concise, clean declarations** .

  ```
  msg := "Hello"     // string
  count := 42        // int
  isReady := true    // bool

  ```



#### Default Zero Values:

| Type                                                                 | Default Value |
| -------------------------------------------------------------------- | ------------- |
| `int`                                                              | `0`         |
| `float64`                                                          | `0.0`       |
| `bool`                                                             | `false`     |
| `string`                                                           | `""`(empty) |
| `pointer`,`interface`,`slice`,`map`,`channel`,`function` | `nil`       |

> 🚨 Always initialize values explicitly if relying on a value other than the default.

#### Variable Scope:

* Declared **outside functions** → package-level
* Declared **inside functions** → local scope
* Use `:=` only inside functions

#### Best Practices:

* Keep names short but meaningful
* Avoid single-letter names except for loop counters
* Prefix booleans with `is`, `has`, `can` (e.g., `isReady`, `hasError`)

---

## 🔤 Data Types in Go

| Type                          | Description           | Example                      |
| ----------------------------- | --------------------- | ---------------------------- |
| `int`,`int64`,`float64` | Numbers               | `var age int = 30`         |
| `string`                    | Text                  | `var name string = "Amol"` |
| `bool`                      | Boolean               | `var isActive bool = true` |
| `[]type`                    | Slice (dynamic array) | `[]int{1, 2, 3}`           |
| `array`                     | Fixed-length          | `[3]int{1, 2, 3}`          |
| `map`                       | Key-value pairs       | `map[string]int{"a":1}`    |
| `struct`                    | Custom type           | `type User struct {}`      |

---

## 🧱 Struct Naming Conventions

| Rule                                          | Example                              |
| --------------------------------------------- | ------------------------------------ |
| PascalCase for struct and fields (for export) | `type User struct { Name string }` |
| camelCase for unexported fields               | `type user struct { name string }` |
| No underscores, no abbreviations              | ❌`usr_name`→ ✅`UserName`      |

---

## 🔠 Constants

```go
const Pi = 3.14         // exported
const maxLimit = 100    // private
```

Use `ALL_CAPS` for grouped constants (rare in Go), otherwise stick to camelCase/PascalCase.

---

## ⚙️ Lexer & Identifiers

* Lexer tokenizes your Go code (keywords, identifiers, literals, operators).
* Identifiers are the names for variables, functions, structs, etc.
* Rules for identifiers:
  * Must start with a letter (a–z or A–Z).
  * Can contain letters and digits.
  * Cannot contain special characters or start with a number.

---

## 🚫 Common Naming Mistakes

| Mistake               | Why It’s Bad                      | Fix           |
| --------------------- | ---------------------------------- | ------------- |
| `user_auth`         | Go doesn’t use underscores        | `userauth`  |
| `UserAuth`(package) | Package names must be lowercase    | `userauth`  |
| `123helper`         | Cannot start with a number         | `helper123` |
| `!config`           | Special characters are not allowed | `config`    |

---

## 🧠 Pro Tips

* Stick to conventions: readability > cleverness.
* Use meaningful short names: `db`, `cfg`, `srv`, `req`, `res`.
* Look at Go standard library packages: `net/http`, `fmt`, `os`, `time`.
* Use linters and formatters: `go fmt`, `golint`.
* Avoid global variables where possible.
* Group similar variables or constants together.
* Document exported functions using comments.

---

## 📚 Resources

* [Go Naming Conventions](https://golang.org/doc/effective_go#names)
* [Go Packages](https://pkg.go.dev/golang.org/x/tools)
* [Go Modules](https://blog.golang.org/using-go-modules)

---

Happy coding in Go! 🐹🚀
