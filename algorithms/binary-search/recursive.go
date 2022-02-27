package binary_search

func BinarySearchRecursive(array []int, item int) bool {

	var search func(array []int, item int, left int, right int) bool
	search = func(array []int, item int, left int, right int) bool {
		if left > right {
			return false
		}

		mid := (left + right) / 2
		if array[mid] == item {
			return true
		}

		if item < array[mid] {
			return search(array, item, left, mid-1)
		} else {
			return search(array, item, mid+1, right)
		}
	}

	if item < array[0] || item > array[len(array)-1] {
		return false
	}

	return search(array, item, 0, len(array)-1)
}
