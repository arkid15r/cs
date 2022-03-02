package main

import (
	"fmt"

	binary_search "github.com/arkid15r/cs/algorithms/searching/binary-search"
)

func main() {
	array := []int{1, 2, 3, 4}
	found := binary_search.BinarySearchIterative(array, 1)
	fmt.Println(found)

	found = binary_search.BinarySearchIterative(array, 4)
	fmt.Println(found)

	found = binary_search.BinarySearchIterative(array, -4)
	fmt.Println(found)
}
