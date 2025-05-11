import { AlgorithmDemo } from "../components/AlgorithmDemo";
import "../styles/Algorithms.css";

const Algorithms = () => {
  const twoSumAlgorithm = {
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    pythonCode: `def two_sum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    # Create a hash map to store values and their indices
    num_map = {}
    
    # Iterate through the array
    for i, num in enumerate(nums):
        # Calculate the complement needed to reach the target
        complement = target - num
        
        # Check if the complement exists in our hash map
        if complement in num_map:
            # Return the indices of the two numbers
            return [num_map[complement], i]
        
        # Add the current number and its index to the hash map
        num_map[num] = i
    
    # If no solution is found (though the problem states there will always be one)
    return []`,
    complexity: {
      time: "O(n)",
      space: "O(n)",
    },
    examples: [
      {
        input: "nums = [2, 7, 11, 15], target = 9",
        output: "[0, 1]",
        explanation: "Because nums[0] + nums[1] = 2 + 7 = 9, we return [0, 1].",
      },
      {
        input: "nums = [3, 2, 4], target = 6",
        output: "[1, 2]",
        explanation: "Because nums[1] + nums[2] = 2 + 4 = 6, we return [1, 2].",
      },
    ],
  };

  const maxSubArrayAlgorithm = {
    title: "Maximum Subarray",
    description:
      "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. This is a classic problem solved using Kadane's algorithm.",
    pythonCode: `def max_subarray(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    # Initialize variables to track current and maximum sum
    current_sum = max_sum = nums[0]
    
    # Iterate through the array starting from the second element
    for num in nums[1:]:
        # For each element, decide whether to start a new subarray or extend the existing one
        current_sum = max(num, current_sum + num)
        
        # Update the maximum sum if the current sum is larger
        max_sum = max(max_sum, current_sum)
    
    return max_sum`,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    examples: [
      {
        input: "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        output: "6",
        explanation: "The subarray [4, -1, 2, 1] has the largest sum = 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation:
          "The array has only one element, so the maximum subarray is just that element.",
      },
    ],
  };

  const validParenthesesAlgorithm = {
    title: "Valid Parentheses",
    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets, and open brackets are closed in the correct order.",
    pythonCode: `def is_valid(s):
    """
    :type s: str
    :rtype: bool
    """
    # Initialize a stack to keep track of opening brackets
    stack = []
    
    # Define a mapping of closing brackets to their corresponding opening brackets
    bracket_map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    
    # Iterate through each character in the string
    for char in s:
        # If the character is a closing bracket
        if char in bracket_map:
            # Pop the top element from the stack if it's not empty, otherwise use a dummy value
            top_element = stack.pop() if stack else '#'
            
            # Check if the popped element matches the corresponding opening bracket
            if bracket_map[char] != top_element:
                return False
        else:
            # If the character is an opening bracket, push it onto the stack
            stack.append(char)
    
    # If the stack is empty, all brackets were matched correctly
    return not stack`,
    complexity: {
      time: "O(n)",
      space: "O(n)",
    },
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
        explanation: "The brackets don't match in type.",
      },
    ],
  };

  return (
    <div className="algorithms-page">
      <div className="algorithms-header">
        <h1>Algorithm Solutions</h1>
        <p>
          Here are some of my solutions to common algorithm problems. Each
          solution includes the problem description, Python implementation, time
          and space complexity analysis, and examples.
        </p>
      </div>

      <div className="algorithms-container">
        <AlgorithmDemo {...twoSumAlgorithm} />
        {/* <AlgorithmDemo {...maxSubArrayAlgorithm} />
        <AlgorithmDemo {...validParenthesesAlgorithm} />  */}
      </div>
    </div>
  );
};

export default Algorithms;
