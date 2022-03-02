package binary_search

func BinarySearchIterative(array []int, item int) bool {
	if item < array[0] || item > array[len(array)-1] {
		return false
	}

	left := 0
	right := len(array) - 1

	for left <= right {
		mid := (left + right) / 2
		if array[mid] == item {
			return true
		}
		if item < array[mid] {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return false
}
