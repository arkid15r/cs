package utils

func Swap(array []int, id1 int, id2 int) {
	array[id1], array[id2] = array[id2], array[id1]
}
