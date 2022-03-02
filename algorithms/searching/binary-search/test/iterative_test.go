package main

import (
	"testing"

	. "github.com/arkid15r/cs/algorithms/searching/binary-search"
	. "github.com/franela/goblin"
)

func TestBinarySearchFound(t *testing.T) {
	g := Goblin(t)
	array := []int{1, 2, 3, 4}

	g.Describe("Binary Search Iterative", func() {
		g.It("should return false for non-existing items", func() {
			items := []int{-4, 0}
			for _, item := range items {
				g.Assert(BinarySearchIterative(array, item)).Equal(false)
			}
		})

		g.It("should return true for existing items", func() {
			items := []int{1, 3, 4}
			for _, item := range items {
				g.Assert(BinarySearchIterative(array, item)).Equal(true)
			}
		})
	})
}
