package hello

import "fmt"


func Printf(name string, age int) []string{
	grade := ""
	switch age {
	case 18:
		grade = "大一"
	case 19:
		grade = "大二"
	default:
		grade = "大四" 
  	}
	fmt.Println("public")
}


