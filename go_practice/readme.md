
# 📘 GoLang Naming Conventions & Complete Guide

Welcome to the ultimate beginner-friendly guide on Go (Golang) naming conventions, variables, data types, and best practices. This document serves as a comprehensive reference while learning and writing clean, idiomatic Go code.

---

## 📦 Packages in Go

### ✅ What is a Package?

A **package** in Go is a way to group related Go files together. Every Go file must belong to a package. Packages are the fundamental building blocks of Go applications, enabling code organization and reusability.

* Package names are declared with the `package` keyword at the top of the file.
* The name should be the same as the folder name.
* When importing packages, you reference the full path, but use only the last element in your code.

```go
// file: models/user.go
package models
```

**Go Package Philosophy:**
Go's package system is designed around the principle of clear, minimal dependencies and efficient compilation. Unlike some languages that use namespaces, Go's package model is flat within a module, emphasizing simplicity. The Go compiler compiles packages independently, which contributes to Go's famously fast build times.

### ✅ Naming Conventions

| Rule                  | Description                             | Example                        |
| --------------------- | --------------------------------------- | ------------------------------ |
| Lowercase only        | Use only lowercase letters              | `models`,`auth`,`db`     |
| No special characters | Avoid `_`,`-`,`@`, etc.           | `userauth`,`jsonutils`     |
| No camelCase          | Don't use capital letters or mixed case | ❌`UserAuth`, ✅`userauth` |
| Short & descriptive   | Keep names concise and meaningful       | ✅`config`,`routes`        |

> 📌 Packages can't start with a number or underscore and must only contain letters and numbers.

**Why these conventions matter:**
Go places high importance on consistent, readable code. Package naming conventions ensure that import statements and package qualifiers remain clean and predictable. The standard library exemplifies these practices with short, clear package names like `fmt`, `http`, and `io`. This consistency makes Go code instantly recognizable and easier to understand across different projects.

**Package vs. Directory Names:**
In Go, there's a direct relationship between package names and directory structure, but with important nuances:

* The directory name determines the import path
* The package name (declared in the file) determines how you reference it in code
* These are typically the same, but can differ in special cases (like tests)

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

**Project Structure Philosophy:**
Go doesn't enforce a strict project layout, but the community has adopted certain patterns. The structure above follows a domain-based organization, which works well for web applications and services. For more complex applications, there are several recognized approaches:

1. **Standard Go Project Layout:** The unofficial but widely referenced [Standard Go Project Layout](https://github.com/golang-standards/project-layout) provides a comprehensive structure for larger applications, including directories like `/cmd`, `/internal`, `/pkg`, and `/api`.
2. **Domain-Driven Design:** Organizing by business domain rather than technical function.
3. **Flat Structure:** For smaller applications, keeping a minimal structure with few subdirectories can be preferable.

**Context Packages:**
A powerful pattern in Go is to organize packages by context rather than type. Instead of having packages like `models`, `controllers`, and `views`, consider domain-specific packages like `user`, `payment`, and `inventory`, each containing all the components related to that domain.

---

## 📦 Modules in Go

### ✅ What is a Module?

A **module** is a collection of Go packages with a `go.mod` file defining the root of the project. Introduced in Go 1.11, modules are Go's official dependency management system, replacing the older GOPATH approach.

**Module Features:**

* Version management for dependencies
* Reproducible builds through checksums (go.sum)
* Semantic version awareness
* Dependency pinning and updating

**How Modules Work:**
When importing a package from another module, Go checks the `go.mod` file to determine which version to use. If not specified, it uses the latest version. The `go.sum` file ensures integrity by verifying checksums of dependencies.

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

**Module Versioning Strategy:**
Go modules follow semantic versioning (semver) principles. This is reflected in the import paths:

```go
// Using a specific version
import "github.com/user/module/v2"  // Uses major version 2
```

Major version changes (which break backward compatibility) are treated as different modules, which is why `/v2` appears in the import path for version 2.0.0 and above.

**Working with Modules:**

```bash
# Initialize a new module
go mod init github.com/username/projectname

# Add a dependency
go get github.com/pkg/errors

# Update dependencies to latest versions
go get -u ./...

# View module dependency graph
go mod graph

# Clean up unused dependencies
go mod tidy
```

---

## 🧱 Variable and Function Naming

| Rule                                  | Example                                |
| ------------------------------------- | -------------------------------------- |
| camelCase for variables and functions | `userName`,`getUserData()`         |
| PascalCase for exported functions     | `GetUser()`(visible outside package) |
| Avoid underscores                     | `get_user()`❌                       |
| Descriptive but concise               | `isValid`,`tempData`               |

**Context and Scope Considerations:**

* Shorter names for smaller scopes (e.g., `i` for loop counters)
* Longer, more descriptive names for wider scopes
* Consider the call site readability: `client.FetchItems()` reads more naturally than `client.GetItems()`

**Semantic Naming:**
In Go, names should reflect the purpose rather than the type:

* ❌ `userString`, `timeInt`
* ✅ `userName`, `startTime`

### 🔐 Visibility Rules

| Type    | Starts With      | Visibility    |
| ------- | ---------------- | ------------- |
| Public  | Capital letter   | Exported      |
| Private | Lowercase letter | Package-local |

```go
func getUser() {} // private
func GetUser() {} // exported
```

**Visibility Mechanics:**
Go's visibility rules are enforced by the compiler, not just conventions. This mechanism:

* Enforces encapsulation
* Provides clear API boundaries
* Reduces name collisions
* Allows implementation details to change without affecting consumers

**Package-Level Encapsulation:**
Unlike languages with `private`, `protected`, and `public` modifiers, Go has only two visibility levels: package-private and exported. This encourages grouping tightly coupled components in the same package, leading to more cohesive code organization.

---

## 📊 Variables in Go

### 🧮 Variable Declaration Methods

Go provides multiple ways to declare variables, each with specific use cases:

#### 1. Standard Declaration

```go
var name string = "Amol"      // explicit type and value
var age int                   // zero value (0) assigned
var isActive = true           // type inferred from value
```

**The Var Statement:**
The `var` keyword in Go has roots in systems programming languages but with a cleaner syntax. The standard declaration is particularly useful when:

* You need to specify a type explicitly
* You want to declare a variable without immediate initialization
* You're declaring variables at package level

#### 2. 🔎 Shorthand Declaration (`:=`)

```go
name := "Amol"        // string
count := 42           // int
isReady := true       // bool
```

**How Shorthand Works:**
The `:=` operator combines declaration and assignment into one step. It's a syntactic sugar introduced to make Go code more concise. Under the hood, it's equivalent to a `var` declaration with type inference.

**Important rules for shorthand declarations:**

* Can be used  **only inside functions** , not at package level
* Creates a new variable if it doesn't exist
* If variable already exists, it acts as an assignment (except when declaring new variables in the same statement)
* Multiple variables can be declared in one line:
  ```go
  name, age := "Amol", 30
  ```
* At least one new variable must be declared when using `:=` with existing variables:
  ```go
  // count already exists, isAdmin is newcount, isAdmin := 42, true  // Valid// Both variables exist - would cause an error// count, total := 42, 100  // Invalid
  ```

**Declaration Redeclaration Rules:**
The ability to "redeclare" variables in multi-variable shorthand declarations is specifically designed for handling error patterns:

```go
file, err := os.Open("file.txt")
// Later in the same block:
file, err := os.Create("newfile.txt")  // Would normally be an error
```

This pattern works because Go recognizes that `err` is a common variable that needs to be reassigned frequently. This is a special case in the language design.

#### 3. Multiple Variable Declaration

```go
// Individual declarations
var (
    name string = "Amol"
    age  int    = 30
    city string = "Mumbai"
)

// Multiple shorthand declarations
firstName, lastName := "Amol", "Dev"
```

**Block Declaration Style:**
The block-style variable declaration with `var (...)` improves code readability when declaring multiple related variables. It visually groups them and makes the code more maintainable, especially for package-level variables.

### 🖨️ Accessing Variables in Print Functions

There are several ways to display variable values:

#### 1. Standard `fmt.Println`

```go
name := "Amol"
age := 30
fmt.Println("Name:", name, "Age:", age)  // Name: Amol Age: 30
```

**Behind the Scenes:**
`fmt.Println` uses Go's reflection capabilities to determine the appropriate string representation for each argument. It automatically adds spaces between arguments and a newline at the end. For complex types, it provides reasonable default formatting.

#### 2. Using `fmt.Printf` with Format Specifiers

```go
name := "Amol"
age := 30
fmt.Printf("Name: %s, Age: %d\n", name, age)  // Name: Amol, Age: 30
```

Common format specifiers:

* `%s` - strings
* `%d` - integers
* `%f` - floating-point (use `%.2f` for 2 decimal places)
* `%t` - boolean
* `%v` - any value (default format)
* `%+v` - struct with field names
* `%#v` - Go syntax representation
* `%T` - Type of the value
* `%p` - Pointer address
* `%q` - Quoted string or rune

**Advanced Formatting:**
Format specifiers can include width and precision modifiers:

```go
fmt.Printf("%10s", "hello")     // "     hello" (right-aligned, width 10)
fmt.Printf("%-10s", "hello")    // "hello     " (left-aligned, width 10)
fmt.Printf("%.2f", 3.14159)     // "3.14" (2 decimal places)
fmt.Printf("%8.2f", 3.14159)    // "    3.14" (width 8, 2 decimal places)
```

#### 3. Using `fmt.Sprintf` (returns string instead of printing)

```go
name := "Amol"
age := 30
message := fmt.Sprintf("Name: %s, Age: %d", name, age)
```

**Functional Differences:**

* `Println`: Prints with automatic spacing and newline
* `Printf`: Prints with format specifiers, no automatic newline
* `Print`: Prints without automatic spacing or newline
* `Sprintf`: Returns a formatted string (doesn't print)
* `Fprintf`: Prints to a specified writer (like a file)

#### 4. String Concatenation (less efficient)

```go
name := "Amol"
fmt.Println("Hello, " + name + "!")
```

**Performance Considerations:**
String concatenation with `+` creates a new string for each operation, which can be inefficient for multiple operations. For complex string building, consider:

```go
var builder strings.Builder
builder.WriteString("Hello, ")
builder.WriteString(name)
builder.WriteString("!")
result := builder.String()
```

### 🔄 Variable Scope and Shadowing

```go
var globalVar = "I'm global"  // Package-level scope

func demo() {
    localVar := "I'm local"   // Function-level scope
  
    globalVar := "I shadow the global"  // Creates new local variable
                                      // that shadows global variable
  
    if true {
        blockVar := "I'm block-scoped"  // Block-level scope
        globalVar := "I'm also local"   // Shadows both variables above
    }
    // blockVar not accessible here
}
```

**Scope Mechanics in Go:**
Go uses lexical scoping with block-based scope boundaries. Variables are accessible:

* From their declaration point to the end of the block
* In nested blocks (unless shadowed)
* Not in parent or sibling blocks

**Shadowing Effects and Detection:**
Variable shadowing can lead to subtle bugs. The Go compiler doesn't warn about shadowing by default, but tools like `go vet` and `shadow` linter can help detect potential issues.

**Best Practices for Scope Management:**

* Keep variables in the smallest scope needed
* Avoid shadowing package variables
* Be cautious with shadowing in if/else chains
* Use meaningful names to reduce confusion

### Default Zero Values:

| Type                                                                 | Default Value                 |
| -------------------------------------------------------------------- | ----------------------------- |
| `int`,`int8`,`int16`,`int32`,`int64`                       | `0`                         |
| `uint`,`uint8`,`uint16`,`uint32`,`uint64`                  | `0`                         |
| `float32`,`float64`                                              | `0.0`                       |
| `bool`                                                             | `false`                     |
| `string`                                                           | `""`(empty)                 |
| `pointer`,`interface`,`slice`,`map`,`channel`,`function` | `nil`                       |
| `struct`                                                           | All fields set to zero values |

**Zero Value Philosophy:**
Go's zero value concept ensures that variables are always usable without explicit initialization. This design choice:

1. Prevents null pointer exceptions common in other languages
2. Reduces boilerplate initialization code
3. Makes code more robust and predictable
4. Enables elegant patterns like the zero value of `sync.Mutex` being ready to use

**Zero Value Usability:**
Many Go types are specifically designed to have useful zero values:

* An empty string is a valid `string`
* A zero-length, nil-backed slice works with append
* `time.Time{}.IsZero()` returns true
* `sync.Mutex{}` is ready to use

**Type-Specific Behaviors:**
While all types have zero values, their behavior varies:

* Zero-valued maps and channels must be initialized with `make()` before use
* Zero-valued slices can be appended to, but not indexed directly
* Zero-valued interfaces can't have methods called on them

---

## 🔤 Data Types in Go

### Basic Types

| Type                                                | Description            | Size/Range                     | Example                       |
| --------------------------------------------------- | ---------------------- | ------------------------------ | ----------------------------- |
| `bool`                                            | Boolean                | true/false                     | `var isActive bool = true`  |
| `string`                                          | Text                   | UTF-8 encoded                  | `var name string = "Amol"`  |
| `int`                                             | Integer                | Platform dependent (32/64-bit) | `var age int = 30`          |
| `int8`,`int16`,`int32`,`int64`              | Specific size integers | -128 to 127, etc.              | `var count int64 = 100`     |
| `uint`,`uint8`,`uint16`,`uint32`,`uint64` | Unsigned integers      | 0 to 255, etc.                 | `var id uint = 10`          |
| `float32`,`float64`                             | Floating-point         | IEEE-754                       | `var price float64 = 19.99` |
| `complex64`,`complex128`                        | Complex numbers        | Real and imaginary parts       | `var c complex128 = 3+4i`   |
| `byte`                                            | Alias for uint8        | 0 to 255                       | `var b byte = 'A'`          |
| `rune`                                            | Alias for int32        | Unicode code points            | `var r rune = '文'`         |

**Type Implementation Details:**

**Integer Types:**
Go's `int` and `uint` types are platform-dependent (32-bit on 32-bit systems, 64-bit on 64-bit systems). This provides performance benefits but can lead to portability issues. For guaranteed size, use explicitly sized types like `int64`.

**String Type:**
Strings in Go are immutable sequences of bytes, always encoded in UTF-8. They can contain any bytes, including null bytes, and are not null-terminated like in C. Internally, a string consists of a length and a pointer to an array of bytes.

**Floating-Point Types:**
Go follows the IEEE-754 standard for floating-point arithmetic. Be aware of precision issues:

```go
fmt.Println(0.1 + 0.2)  // 0.30000000000000004
```

**Rune vs. Byte:**

* `byte` represents a single ASCII character (0-127)
* `rune` represents a Unicode code point, supporting international characters

**String Internals:**

* Length: O(1) operation - pre-computed
* Substring: Creates a new header but shares backing array
* Concatenation: Creates new backing array
* UTF-8 handling: Use `range` for character (rune) iteration

### Composite Types

| Type       | Description           | Example                                    |
| ---------- | --------------------- | ------------------------------------------ |
| Arrays     | Fixed-size collection | `var scores [3]int = [3]int{90, 85, 95}` |
| Slices     | Dynamic arrays        | `langs := []string{"Go", "Python"}`      |
| Maps       | Key-value pairs       | `users := map[string]int{"Amol": 30}`    |
| Structs    | Custom data types     | `type User struct { Name string }`       |
| Pointers   | Memory addresses      | `var ptr *int = &age`                    |
| Channels   | Communication pipes   | `ch := make(chan int)`                   |
| Functions  | First-class citizens  | `var handler func(int) bool`             |
| Interfaces | Method collections    | `type Reader interface { Read() }`       |

**Arrays vs. Slices:**
Arrays in Go are value types with fixed size. When passed to functions, they are copied. Slices, on the other hand, are reference types with dynamic size. They consist of:

1. A pointer to an underlying array
2. A length (current size)
3. A capacity (maximum size before reallocation)

```go
// Array operations
var arr [3]int = [3]int{1, 2, 3}
fmt.Println(len(arr))  // 3
// arr = append(arr, 4)  // Error: append not defined for arrays

// Slice operations
slice := []int{1, 2, 3}
fmt.Println(len(slice), cap(slice))  // 3 3
slice = append(slice, 4)  // Works fine
```

**Map Implementation:**
Maps in Go are implemented as hash tables. Key types must be comparable (can be used with the `==` operator). This excludes slices, maps, and functions as key types.

```go
// Map creation
scores := make(map[string]int)
scores["Alice"] = 95

// Check if key exists
score, exists := scores["Bob"]
if exists {
    fmt.Println("Score:", score)
} else {
    fmt.Println("No score found")
}

// Delete a key
delete(scores, "Alice")
```

**Map Performance Characteristics:**

* Lookup: O(1) average case
* Insertion: O(1) average case, may require reallocation
* Iteration order: Random, not guaranteed between runs

**Struct Memory Layout:**
Structs in Go are value types and have memory-aligned fields for performance. The compiler may add padding between fields:

```go
type Example struct {
    A byte  // 1 byte + 3 padding bytes
    B int32 // 4 bytes
    C byte  // 1 byte + 7 padding bytes (to align with 64-bit boundary)
    D int64 // 8 bytes
}
// Size: 24 bytes (with typical alignment)
```

Field ordering can affect memory usage:

```go
type Efficient struct {
    D int64 // 8 bytes
    B int32 // 4 bytes
    A byte  // 1 byte
    C byte  // 1 byte
} // Size: 16 bytes (with typical alignment)
```

### Type Conversion

```go
// Converting between types
age := 30
ageFloat := float64(age)

price := 19.99
priceInt := int(price)  // Truncates to 19

// String conversions
import "strconv"

str := strconv.Itoa(age)      // int to string
num, err := strconv.Atoi("30") // string to int

// Using fmt package
str := fmt.Sprintf("%d", age)  // int to string
```

**Type Conversion Safety:**
Go's type conversions are explicit and often checked for safety:

1. **Safe conversions:** Always work but may lose precision
   ```go
   var i int32 = 100
   var j int64 = int64(i)  // Always works
   ```
2. **Lossy conversions:** May lose data
   ```go
   var large int64 = 1<<33
   var small int32 = int32(large)  // Value becomes -2147483648 (overflow)
   ```
3. **String conversions:** Can fail and return errors
   ```go
   num, err := strconv.Atoi("not a number")
   if err != nil {
       // Handle error
   }
   ```

**Advanced Type Conversions:**

* **Interface type assertion:** `value.(Type)`
* **Type switch:** For handling multiple possible types
  ```go
  switch v := interface{}(value).(type) {case int:    fmt.Println("Integer:", v)case string:    fmt.Println("String:", v)default:    fmt.Println("Unknown type")}
  ```

---

## 🔠 Constants

Constants in Go are immutable values determined at compile time.

```go
// Individual constants
const Pi = 3.14159      // exported (uppercase)
const maxRetries = 3    // private (lowercase)

// Multiple constant declaration
const (
    StatusOK    = 200
    StatusError = 500
    Version     = "1.0.0"
)

// iota for enumerated constants
const (
    Sunday = iota  // 0
    Monday         // 1
    Tuesday        // 2
    Wednesday      // 3
    Thursday       // 4
    Friday         // 5
    Saturday       // 6
)

// iota with expressions
const (
    KB = 1 << (10 * iota)  // 1 << 0 = 1
    MB                     // 1 << 10 = 1024
    GB                     // 1 << 20 = 1,048,576
    TB                     // 1 << 30 = 1,073,741,824
)
```

**Constant Evaluation:**
Constants in Go are evaluated at compile time, not runtime. This makes them more efficient but limits what expressions can be used to define them:

```go
const x = 5        // Valid
const y = x + 3    // Valid
const z = math.Sin(x)  // Invalid: function calls not allowed
```

**Iota Mechanics:**
The `iota` identifier generates sequential numbers within a `const` block:

* Starts at 0 for each const block
* Increments by 1 for each constant
* Can be used in expressions
* Skipped values still increment it

```go
const (
    _ = iota       // 0 (skipped)
    One            // 1
    Two            // 2
    _              // 3 (skipped)
    Four = iota    // 4 (explicit)
)
```

**Bit Flag Patterns:**
A common use of `iota` is for bit flags and permissions:

```go
const (
    Read = 1 << iota  // 1 (1 << 0)
    Write             // 2 (1 << 1)
    Execute           // 4 (1 << 2)
)

// Usage
permissions := Read | Write  // 3
hasRead := permissions&Read != 0  // true
```

### Constant Naming Conventions

* Use PascalCase for exported constants (`Pi`, `StatusOK`)
* Use camelCase for non-exported constants (`maxRetries`)
* Use ALL_CAPS for constants that act like enums or are truly constants across the codebase (less common in Go)

**Constants vs. Variables for Configuration:**

* Constants: For values known at compile time that never change
* Variables: For configuration that might be environment-specific or changeable

### Typed vs. Untyped Constants

```go
const typedInt int = 10       // typed constant
const untypedInt = 10         // untyped constant (more flexible)

var myFloat float64 = untypedInt  // Works with untyped constants
// var myFloat float64 = typedInt  // Error with typed constants
```

**Untyped Constants in Go:**
Untyped constants in Go have an implicit "default type" but can be used in contexts requiring different types as long as the value can be represented by the target type. This flexibility simplifies code but requires understanding the rules:

```go
const untyped = 42   // Default type is int, but flexible
const typed int8 = 42  // Fixed as int8

var a int = untyped    // Works (int)
var b float64 = untyped  // Works (converted to 42.0)
var c complex128 = untyped  // Works (converted to 42+0i)
var d string = untyped  // Error: cannot convert int to string

var e int8 = 127    // Works
var f int8 = 128    // Error: constant 128 overflows int8
var g int8 = typed  // Works
```

**Precision of Untyped Constants:**
Untyped numeric constants in Go have much higher precision than any predefined type:

```go
const precisePi = 3.14159265358979323846264338327950288419716939937510582097494459
var float32Pi float32 = precisePi  // Precision reduced to float32
var float64Pi float64 = precisePi  // Precision reduced to float64
```

---

## 🧱 Struct Naming Conventions and Usage

### Basic Structure

```go
// Exported struct with exported fields
type User struct {
    ID        int       // Exported field
    Name      string    // Exported field
    Email     string    // Exported field
    createdAt time.Time // Unexported field
}

// Unexported struct
type configuration struct {
    timeout  int
    maxUsers int
}
```

**Struct Design Principles:**

* Group related fields together
* Order fields for readability (and sometimes memory efficiency)
* Consider adding comments for fields with non-obvious purposes
* Use field tags for metadata (JSON, XML, DB mappings)
* Prefer composition over inheritance (Go has no inheritance)

**Field Alignment and Memory Optimization:**
The Go compiler aligns struct fields in memory for efficiency. Organizing fields from largest to smallest can reduce memory usage due to padding:

```go
// Less efficient (24 bytes with padding)
type Person struct {
    Name string    // 16 bytes
    Age  uint8     // 1 byte + 7 padding bytes
}

// More efficient (16 bytes)
type Person struct {
    Age  uint8     // 1 byte + 7 padding bytes
    Name string    // 16 bytes (already aligned)
}
```

### Struct Initialization

```go
// Method 1: Positional (not recommended for structs with many fields)
user1 := User{1, "Amol", "amol@example.com", time.Now()}

// Method 2: Named fields (recommended)
user2 := User{
    ID:    2,
    Name:  "Dev",
    Email: "dev@example.com",
}

// Method 3: Empty struct and field assignment
var user3 User
user3.ID = 3
user3.Name = "Raj"

// Method 4: Using new() (returns pointer)
user4 := new(User)
user4.ID = 4
```

**Constructor Functions:**
Go doesn't have constructors, but it's common to create functions that return initialized structs:

```go
// Simple constructor
func NewUser(id int, name, email string) User {
    return User{
        ID:        id,
        Name:      name,
        Email:     email,
        createdAt: time.Now(),
    }
}

// Constructor with validation
func NewUser(id int, name, email string) (User, error) {
    if name == "" {
        return User{}, errors.New("name cannot be empty")
    }
    return User{
        ID:        id,
        Name:      name,
        Email:     email,
        createdAt: time.Now(),
    }, nil
}
```

**Functional Options Pattern:**
For structs with many optional fields, the functional options pattern provides a clean API:

```go
type UserOption func(*User)

func WithEmail(email string) UserOption {
    return func(u *User) {
        u.Email = email
    }
}

func WithCreatedAt(t time.Time) UserOption {
    return func(u *User) {
        u.createdAt = t
    }
}

func NewUser(id int, name string, opts ...UserOption) User {
    u := User{
        ID:   id,
        Name: name,
    }
  
    for _, opt := range opts {
        opt(&u)
    }
  
    return u
}

// Usage
user := NewUser(1, "Amol", WithEmail("amol@example.com"))
```

### Struct Embedding

```go
type Person struct {
    Name string
    Age  int
}

type Employee struct {
    Person      // Embedded struct
    EmployeeID  string
    Department  string
}

// Usage
emp := Employee{
    Person:     Person{Name: "Amol", Age: 30},
    EmployeeID: "E123",
    Department: "Engineering",
}

// Access embedded fields directly
fmt.Println(emp.Name)  // "Amol" (from Person)
```

**Embedding Mechanics:**
Struct embedding in Go provides a form of composition that promotes code reuse without inheritance:

1. **Field Promotion:** Fields and methods of embedded types are "promoted" to the containing struct
2. **Name Collision Resolution:** Outer struct fields/methods take precedence over embedded ones
3. **Multiple Embedding:** A struct can embed multiple types
4. **Interface Satisfaction:** Embedding helps with interface implementation

```go
// Multiple embedding
type Writer interface {
    Write([]byte) (int, error)
}

type Logger struct{}
func (l Logger) Log(message string) {
    fmt.Println("LOG:", message)
}

type Socket struct{}
func (s Socket) Write(data []byte) (int, error) {
    fmt.Println("SOCKET: Writing data:", string(data))
    return len(data), nil
}

type LoggingSocket struct {
    Logger  // Embeds Logger
    Socket  // Embeds Socket, satisfies Writer interface
}

// Usage
ls := LoggingSocket{}
ls.Log("Starting write")     // From Logger
ls.Write([]byte("Hello"))    // From Socket
```

**Embedding vs. Composition:**
Go favors composition over inheritance, but offers two approaches:

1. **Explicit composition:** Using named fields
   ```go
   type Car struct {
       engine Engine  // Named field
   }
   // Usage: car.engine.Start()
   ```
2. **Embedding:** For when you want to expose the embedded type's interface
   ```go
   type Car struct {
       Engine  // Embedded
   }
   // Usage: car.Start() // Promoted from Engine
   ```

The choice depends on whether you want to expose the inner type's API or keep it encapsulated.

### Struct Tags

Struct tags provide metadata for fields, commonly used with JSON, XML, and database operations:

```go
type Product struct {
    ID        int     `json:"id" db:"product_id"`
    Name      string  `json:"name" db:"product_name"`
    Price     float64 `json:"price" db:"price"`
    IsInStock bool    `json:"in_stock" db:"is_in_stock"`
}
```

**Tag Mechanics and Processing:**
Struct tags are string literals attached to struct fields. They have no effect by themselves but are interpreted by various packages using reflection:

```go
import "reflect"

type User struct {
    Name string `json:"name" validate:"required"`
}

// Accessing tags
t := reflect.TypeOf(User{})
field, _ := t.FieldByName("Name")
jsonTag := field.Tag.Get("json")      // "name"
validateTag := field.Tag.Get("validate") // "required"
```

**Common Tag Formats and Packages:**

1. **JSON and encoding/json** :

```go
   `json:"fieldname,omitempty"`  // Skip empty values
   `json:"-"`                   // Skip field entirely
```

1. **SQL and database/sql** :

```go
   `db:"column_name"`
```

1. **Form validation** :

```go
   `validate:"required,min=3,max=50"`
```

1. **XML encoding** :

```go
   `xml:"element-name,attr"`
```

**Custom Tag Processing:**
You can create your own struct tag processing:

```go
type User struct {
    Name string `custom:"important,priority=high"`
}

func processCustomTag(tag string) map[string]string {
    result := make(map[string]string)
    parts := strings.Split(tag, ",")
  
    for _, part := range parts {
        if strings.Contains(part, "=") {
            kv := strings.Split(part, "=")
            result[kv[0]] = kv[1]
        } else {
            result[part] = "true"
        }
    }
  
    return result
}

// Usage
t := reflect.TypeOf(User{})
field, _ := t.FieldByName("Name")
customTag := field.Tag.Get("custom")
options := processCustomTag(customTag)
// options = {"important":"true", "priority":"high"}
```

---

## ⚙️ Lexer & Identifiers

### Lexer

The Go lexer is part of the compiler that breaks down your code into tokens:

* Keywords: `if`, `func`, `return`, etc.
* Identifiers: Variable, function, type names
* Operators: `+`, `-`, `*`, `/`, etc.
* Literals: `42`, `"hello"`, `true`, etc.
* Delimiters: `{`, `}`, `;`, etc.

**Lexical Analysis Process:**
When you compile Go code, the lexer is the first phase of processing:

1. **Scanning** : The lexer reads source code character by character
2. **Tokenization** : It groups characters into tokens
3. **Classification** : It identifies the type of each token
4. **Output** : It passes tokens to the parser

**Semicolon Insertion:**
A unique feature of Go's lexer is automatic semicolon insertion. The lexer automatically adds semicolons at the end of lines in specific contexts:

```go
// These two are equivalent:
func main() { fmt.Println("Hello") }

func main() {
    fmt.Println("Hello")
}
```

This affects code formatting requirements, such as the placement of opening braces:

```go
// Incorrect - will cause errors due to semicolon insertion:
func main()
{
    fmt.Println("Hello")
}
```

### Identifiers

Identifiers are names for variables, functions, types, etc.

Rules:

* Must start with a letter (a–z or A–Z) or underscore (`_`)
* Can contain letters, digits, and underscores
* Case-sensitive (`user` ≠ `User`)
* Cannot be keywords (`if`, `func`, `return`, etc.)
* Cannot contain spaces or special characters

```go
// Valid identifiers
name
userName
user_name  // Valid but not idiomatic in Go
_temp      // Valid but usually for special cases
x123

// Invalid identifiers
123user    // Starts with a digit
user-name  // Contains hyphen
if         // Keyword
```

**Identifier Length and Scope Correlation:**
In Go, there's an idiomatic correlation between identifier length and scope size:

1. **Short scope, short name** :

```go
   for i := 0; i < 10; i++ { /* ... */ }
```

1. **Package-level, longer name** :

```go
   var userAuthenticationService *auth.Service
```

1. **Exported name, descriptive** :

```go
   func ParseConfigurationFile(path string) (*Config, error)
```

 **Blank Identifier** :
The underscore `_` is a special identifier called the blank identifier. It's used to ignore values:

```go
// Ignore second return value
result, _ := strconv.Atoi("123")

// Ignore index in for loop
for _, value := range slice { /* ... */ }

// Import for side effects only
import _ "github.com/lib/pq"

// Ignore unused struct field
type response struct {
    Data    []string
    _       int  // padding, not accessible
}
```

### Go Keywords (Reserved Words)

```
break       default     func        interface   select
case        defer       go          map         struct
chan        else        goto        package     switch
const       fallthrough if          range       type
continue    for         import      return      var
```

**Keyword Functions:**

1. **Declaration keywords** :

* `var`, `const`: Declare variables and constants
* `type`: Define new types
* `func`: Define functions
* `package`, `import`: Package management

1. **Statement keywords** :

* `if`, `else`: Conditional statements
* `switch`, `case`, `default`: Multi-branch conditions
* `for`, `range`: Loops
* `break`, `continue`: Loop control
* `return`: Function return

1. **Specialized keywords** :

* `go`: Start goroutine
* `chan`: Channel declaration
* `defer`: Delay execution until function return
* `select`: Wait on multiple channel operations
* `interface`, `struct`: Define composite types
* `map`: Map type
* `fallthrough`: Transfer control in switch statement
* `goto`: Jump to labeled statement (rarely used)

**Predeclared Identifiers:**
Go also has predeclared identifiers that aren't keywords but are built into the language:

1. **Basic types** : `bool`, `byte`, `int`, `string`, etc.
2. **Constants** : `true`, `false`, `iota`, `nil`
3. **Functions** : `new`, `make`, `len`, `cap`, `panic`, `recover`, etc.

---

## 🚀 Advanced Variable Topics

### 1. Pointers

```go
// Creating pointers
name := "Amol"
namePtr := &name      // & gets the memory address

// Dereferencing pointers
value := *namePtr     // * gets the value at that address

// Zero value for pointers
var ptr *string       // nil
```

**Pointer Mechanics:**
Go pointers provide direct memory access but with several safety features compared to C/C++:

* No pointer arithmetic
* No pointer casting (without unsafe package)
* Automatic memory management

**Pointer Use Cases:**

1. **Modifying arguments in functions** :

```go
   func increment(x *int) {
       *x++
   }

   count := 5
   increment(&count)
   fmt.Println(count)  // 6
```

1. **Efficient passing of large structs** :

```go
   func process(data *LargeStruct) {
       // Avoids copying the entire struct
   }
```

1. **Implementing mutable receiver methods** :

```go
   func (u *User) SetName(name string) {
       u.Name = name
   }
```

1. **Optional values (similar to nullable types)** :

```go
   type Config struct {
       Timeout *int  // nil means use default
   }
```

**Pointer vs. Value Semantics:**
Go allows both pointer and value receivers for methods, each with different semantics:

```go
// Value receiver - works on a copy
func (u User) GetFullName() string {
    return u.FirstName + " " + u.LastName
}

// Pointer receiver - works on the original
func (u *User) SetName(name string) {
    u.FirstName = name
}
```

Guidelines for choosing:

* Use pointer receivers when you need to modify the receiver
* Use pointer receivers for large structs (efficiency)
* Use pointer receivers for consistency if any method needs a pointer receiver
* Use value receivers for immutable data or small structs

### 2. Type Inference vs. Explicit Types

```go
// Type inference (compiler determines type)
x := 10               // int
y := 10.5             // float64
z := "hello"          // string

// Explicit types
var x int = 10
var y float64 = 10.5
var z string = "hello"
```

**Type Inference Mechanics:**
Go's type inference is static and happens at compile time, not runtime. The compiler uses initialization expressions to determine types:

```go
// Basic inference
x := 1      // Type: int
y := 1.0    // Type: float64
z := "1"    // Type: string
b := true   // Type: bool

// Complex cases
nums := []int{1, 2, 3}  // Type: []int
m := map[string]int{}   // Type: map[string]int

// Function return types
result := strings.Contains("hello", "e")  // Type: bool
```

**Type Inference Limitations:**
Type inference in Go has specific boundaries:

* Cannot infer types for uninitialized variables
* Cannot infer return types of functions (must be declared)
* Cannot infer types across packages for exported API

**When to Use Explicit Types:**

1. When initialization doesn't clearly indicate the intended type
2. For API boundaries and exported functions
3. For variables that will be reused with different types
4. To restrict numeric types to specific sizes (int32, int64, etc.)
5. For documentation and code clarity

### 3. Type Aliasing

```go
// Type aliasing
type UserID int
type Celsius float64

// Usage
var id UserID = 12345
var temp Celsius = 23.5
```

**Type Definition vs. Type Alias:**
Go offers two ways to create new types:

1. **Type Definition (traditional)** :

```go
   type Celsius float64
```

* Creates a completely new type
* Does not inherit methods from the underlying type
* Explicit conversion required to/from underlying type

1. **Type Alias (introduced in Go 1.9)** :

```go
   type Celsius = float64
```

* Creates an alias, not a new type
* Fully compatible with underlying type
* No conversion needed
* Useful for refactoring and API compatibility

**Type Definition with Methods:**
New types can have their own methods:

```go
type Celsius float64

func (c Celsius) String() string {
    return fmt.Sprintf("%.2f°C", c)
}

func (c Celsius) ToFahrenheit() Fahrenheit {
    return Fahrenheit(c*9/5 + 32)
}

// Usage
temp := Celsius(23.5)
fmt.Println(temp)               // "23.50°C"
fmt.Println(temp.ToFahrenheit()) // "74.30°F"
```

**Type Safety Benefits:**
Type definitions provide compile-time type safety:

```go
type UserID int
type ProductID int

func getUser(id UserID) User { /* ... */ }

userId := UserID(123)
productId := ProductID(456)

getUser(userId)    // Works
getUser(productId) // Compile error: cannot use productId (type ProductID) as type UserID
```

### 4. Variable Lifetime

* **Package-level variables** : Live for the program's lifetime
* **Local variables** : Live until they go out of scope
* **Heap variables** : Managed by garbage collector

**Memory Allocation Decisions:**
In Go, the compiler decides whether to allocate variables on the stack or heap based on escape analysis:

```go
func createUserOnStack() User {
    user := User{Name: "Local"}
    return user  // Return by value, can stay on stack
}

func createUserOnHeap() *User {
    user := User{Name: "Escaped"}
    return &user  // Return by reference, must escape to heap
}
```

**Escape Analysis:**
The compiler performs escape analysis to determine where variables should be allocated:

* Variables that don't escape function scope are typically allocated on the stack
* Variables that escape (via pointers or closures) are allocated on the heap
* You can see these decisions with `go build -gcflags=-m`

**Variable Lifetimes by Context:**

1. **Stack variables** : Fast allocation/deallocation, automatically cleaned up
2. **Heap variables** : Subject to garbage collection, can cause GC pressure
3. **Global variables** : Allocated at program start, exist for entire runtime

**Garbage Collection Impact:**
Go's garbage collector is concurrent and low-latency, but still impacts performance:

* Heap allocations trigger GC cycles
* High-performance Go code often minimizes heap allocations
* Object pooling patterns can be used for frequently allocated objects

---

## 🧠 Pro Tips

* Stick to conventions: readability > cleverness.
* Use meaningful short names: `db`, `cfg`, `srv`, `req`, `res`.
* Look at Go standard library packages: `net/http`, `fmt`, `os`, `time`.
* Use linters and formatters: `go fmt`, `golint`, `golangci-lint`.
* Avoid global variables where possible.
* Group similar variables or constants together.
* Document exported functions, types, and variables using comments.
* Prefer explicit types for public APIs.
* Use idiomatic construction patterns for slices, maps:
  ```go
  // Preferred slice initializationitems := make([]string, 0, 10)  // capacity 10, length 0// Preferred map initializationusers := make(map[string]int)
  ```

**Comments and Documentation:**
Go has specific documentation conventions:

```go
// Package utils provides utility functions for the application.
package utils

// MaxRetries defines the maximum number of retry attempts.
const MaxRetries = 3

// User represents a system user with authentication details.
type User struct {
    ID    int
    Email string
}

// Authenticate validates user credentials against the database.
// It returns a token on success or an error on failure.
func Authenticate(email, password string) (string, error) {
    // ...
}
```

**Performance Optimization:**

1. **Preallocate slices** when you know the approximate size:
   ```go
   data := make([]int, 0, expectedSize)
   ```
2. **Avoid string concatenation** in loops:
   ```go
   var builder strings.Builder
   for _, s := range strings {
       builder.WriteString(s)
   }
   result := builder.String()
   ```
3. **Reuse objects** with pools for frequently allocated structs:
   ```go
   var bufferPool = sync.Pool{
       New: func() interface{} {
           return new(bytes.Buffer)
       },
   }

   // Get buffer
   buf := bufferPool.Get().(*bytes.Buffer)
   buf.Reset()

   // Use buffer
   buf.WriteString("hello")

   // Return to pool
   bufferPool.Put(buf)
   ```
4. **Avoid unnecessary allocations** by reusing slices:
   ```go
   // Clear slice without allocation
   data = data[:0]
   ```

**Interface Best Practices:**

1. **Keep interfaces small** :

```go
   // Good - focused interface
   type Reader interface {
       Read(p []byte) (n int, err error)
   }

   // Avoid - kitchen sink interface
   type FileHandler interface {
       Open(name string) error
       Read(p []byte) (n int, err error)
       Write(p []byte) (n int, err error)
       Close() error
       Stat() (FileInfo, error)
       // ...etc
   }
```

1. **Define interfaces where they're used, not implemented** :

```go
   // Package client defines its needs
   package client

   type Logger interface {
       Log(msg string)
   }

   // Package logger provides an implementation
   package logger

   type StdLogger struct{}

   func (l StdLogger) Log(msg string) {
       fmt.Println(msg)
   }
```

**Error Handling Patterns:**

1. **Sentinel errors** for expected error conditions:
   ```go
   if err == io.EOF {
       // Handle end of file
   }
   ```
2. **Custom error types** for detailed error information:
   ```go
   type ValidationError struct {
       Field string
       Error string
   }

   func (v ValidationError) Error() string {
       return fmt.Sprintf("validation error on field %s: %s", v.Field, v.Error)
   }
   ```
3. **Error wrapping** for context:
   ```go
   if err != nil {
       return fmt.Errorf("loading configuration: %w", err)
   }
   ```

---

## 📚 Resources

* [Go Naming Conventions](https://golang.org/doc/effective_go#names)
* [Go Packages](https://pkg.go.dev/golang.org/x/tools)
* [Go Modules](https://blog.golang.org/using-go-modules)
* [Effective Go](https://golang.org/doc/effective_go)
* [Go by Example](https://gobyexample.com/)
* [Go Style Guide](https://google.github.io/styleguide/go/guide)
* [Go FAQ](https://golang.org/doc/faq)
* [Uber Go Style Guide](https://github.com/uber-go/guide/blob/master/style.md)
* [Practical Go: Real world advice for writing maintainable Go programs](https://dave.cheney.net/practical-go/presentations/qcon-china.html)
* [Go 101](https://go101.org/)
* [Go Time Podcast](https://changelog.com/gotime)
* [Go Playground](https://play.golang.org/)
* [GopherCon Videos](https://www.youtube.com/c/GopherAcademy)

**Books:**

* "The Go Programming Language" by Alan A. A. Donovan and Brian W. Kernighan
* "Go in Action" by William Kennedy, Brian Ketelsen, and Erik St. Martin
* "Concurrency in Go" by Katherine Cox-Buday
* "Go Web Programming" by Sau Sheong Chang

**Interactive Learning:**

* [A Tour of Go](https://tour.golang.org/)
* [Gophercises](https://gophercises.com/)
* [Exercism Go Track](https://exercism.io/tracks/go)
* [Go Koans](https://github.com/cdarwin/go-koans)

---

Happy coding in Go! 🐹🚀
