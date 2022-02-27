package testdata

import (
	"io/ioutil"
	"log"
	"strconv"
	"strings"
)

func convertToInt(list []string) []int {
	result := make([]int, len(list))

	for i, item := range list {
		value, _ := strconv.Atoi(item)
		result[i] = value
	}
	return result
}

func readFileToArray(filename string) []int {
	content, err := ioutil.ReadFile(filename)
	if err != nil {
		log.Fatal(err)
	}

	return convertToInt(strings.Split(string(content), " "))
}

var Random100K []int = readFileToArray("testdata/int/random100K.txt")
var SortedAsc100K []int = readFileToArray("testdata/int/asc100K.txt")
var SortedDesc100K []int = readFileToArray("testdata/int/desc100K.txt")
