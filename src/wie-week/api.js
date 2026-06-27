/**
 * api.js — WIE Week Game API
 *
 * MOCK_MODE = true  → returns local data instantly (no network)
 * MOCK_MODE = false → hits the real backend endpoints (fill BASE_URL below)
 *
 * Exports:
 *   getRound1Questions()  → Promise<Question[]>
 *   getRound2Modules()    → Promise<Module[]>
 */

// ─── Config ────────────────────────────────────────────────────────────────
export const MOCK_MODE = true;
const BASE_URL  = 'https://your-backend.example.com/api'; // swap when ready

// ─── Round 1 — MCQ Questions ───────────────────────────────────────────────
/**
 * @typedef {{ q: string, opts: string[], ans: number }} R1Question
 * ans is the 0-based index of the correct option.
 */
const MOCK_ROUND1_QUESTIONS = [
  { q: 'What is the capital of France?',                       opts: ['Berlin', 'Paris', 'Madrid', 'Rome'],                                                                                   ans: 1 },
  { q: 'Which planet is known as the Red Planet?',             opts: ['Venus', 'Jupiter', 'Mars', 'Saturn'],                                                                                  ans: 2 },
  { q: 'What does CPU stand for?',                             opts: ['Central Process Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Core Processing Unit'],                   ans: 1 },
  { q: 'Which data structure follows LIFO order?',             opts: ['Queue', 'Stack', 'Tree', 'Graph'],                                                                                      ans: 1 },
  { q: 'Who invented the World Wide Web?',                     opts: ['Bill Gates', 'Steve Jobs', 'Tim Berners-Lee', 'Linus Torvalds'],                                                        ans: 2 },
  { q: 'What is 2 raised to the power of 10?',                 opts: ['20', '1024', '512', '2048'],                                                                                           ans: 1 },
  { q: 'Which protocol is used for secure web browsing?',      opts: ['HTTP', 'FTP', 'HTTPS', 'SMTP'],                                                                                        ans: 2 },
  { q: 'Time complexity of binary search?',                    opts: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],                                                                                   ans: 2 },
  { q: 'Which HTML tag creates the largest heading?',          opts: ['<h6>', '<heading>', '<h1>', '<head>'],                                                                                  ans: 2 },
  { q: 'Which company developed the Android OS?',              opts: ['Apple', 'Microsoft', 'Samsung', 'Google'],                                                                              ans: 3 },
  { q: 'What does RAM stand for?',                             opts: ['Read Access Memory', 'Random Access Memory', 'Rapid Access Module', 'Runtime Allocated Memory'],                       ans: 1 },
  { q: 'Which language is used for styling web pages?',        opts: ['HTML', 'JavaScript', 'CSS', 'Python'],                                                                                  ans: 2 },
  { q: 'What is the value of π to 2 decimal places?',          opts: ['3.12', '3.14', '3.16', '3.18'],                                                                                       ans: 1 },
  { q: 'Which sorting algorithm has best average O(n log n)?', opts: ['Bubble Sort', 'Insertion Sort', 'Quick Sort', 'Selection Sort'],                                                        ans: 2 },
  { q: 'What does IoT stand for?',                             opts: ['Internet of Things', 'Internet of Technology', 'Integration of Things', 'Interface of Things'],                        ans: 0 },
  { q: 'Which gate outputs 1 only when both inputs are 1?',    opts: ['OR', 'NOT', 'AND', 'XOR'],                                                                                             ans: 2 },
  { q: 'Binary representation of decimal 10?',                 opts: ['1010', '1001', '1100', '0110'],                                                                                        ans: 0 },
  { q: 'Which keyword declares a constant in JavaScript?',     opts: ['var', 'let', 'const', 'static'],                                                                                       ans: 2 },
  { q: 'What does SQL stand for?',                             opts: ['Structured Query Language', 'Simple Query Logic', 'Standard Query Language', 'System Query List'],                     ans: 0 },
  { q: 'Which of these is NOT an OOP concept?',                opts: ['Encapsulation', 'Polymorphism', 'Compilation', 'Inheritance'],                                                          ans: 2 },
];

// ─── Round 2 — Bug-Hunt Modules ────────────────────────────────────────────
/**
 * @typedef {{ t: string, c?: 'cm'|'kw'|'fn', bug?: boolean }} CodeLine
 * @typedef {{ title: string, lines: CodeLine[], bug: string, hint: string }} R2Question
 * @typedef {{ id: number, lang: string, icon: string, col: string, rgb: string, questions: R2Question[] }} R2Module
 */
const MOCK_ROUND2_MODULES = [
  {
    id: 1, lang: 'C++', icon: '⚙', col: '#00b4ff', rgb: '0,180,255',
    questions: [
      {
        title: 'MODULE: POWER ROUTER',
        lines: [
          { c: 'cm', t: '// Find max element in array' },
          { c: 'kw', t: '#include <iostream>' },
          { c: 'kw', t: 'using namespace std;' },
          { t: '' },
          { c: 'fn', t: 'int findMax(int arr[], int n) {' },
          { t: '    int max = 0;', bug: true },
          { t: '    for (int i = 0; i < n; i++) {' },
          { t: '        if (arr[i] > max)' },
          { t: '            max = arr[i];' },
          { t: '    }' },
          { t: '    return max;' },
          { t: '}' },
        ],
        bug: 'int max = 0;',
        hint: 'What if all elements are negative?',
      },
      {
        title: 'MODULE: POWER ROUTER',
        lines: [
          { c: 'cm', t: '// Reverse a string' },
          { t: '' },
          { c: 'fn', t: 'string reverse(string s) {' },
          { t: '    int n = s.length();' },
          { t: '    for (int i = 0; i < n; i++) {', bug: true },
          { t: '        swap(s[i], s[n-i-1]);' },
          { t: '    }' },
          { t: '    return s;' },
          { t: '}' },
        ],
        bug: 'for (int i = 0; i < n; i++) {',
        hint: "You're swapping each pair twice.",
      },
      {
        title: 'MODULE: POWER ROUTER',
        lines: [
          { c: 'cm', t: '// Check palindrome' },
          { t: '' },
          { c: 'fn', t: 'bool isPalin(string s) {' },
          { t: '    int l = 0, r = s.length();', bug: true },
          { t: '    while (l < r) {' },
          { t: '        if (s[l] != s[r]) return false;' },
          { t: '        l++; r--;' },
          { t: '    }' },
          { t: '    return true;' },
          { t: '}' },
        ],
        bug: 'int l = 0, r = s.length();',
        hint: 'Off-by-one: length vs last index.',
      },
      {
        title: 'MODULE: POWER ROUTER',
        lines: [
          { c: 'cm', t: '// Sum of digits' },
          { t: '' },
          { c: 'fn', t: 'int sumDigits(int n) {' },
          { t: '    int sum = 0;' },
          { t: '    while (n > 0) {' },
          { t: '        sum += n % 10;' },
          { t: '        n = n / 10;', bug: true },
          { t: '    }' },
          { t: '    return sum;' },
          { t: '}' },
        ],
        bug: 'n = n / 10;',
        hint: 'Integer division truncates — is that the bug here? Check negative n.',
      },
    ],
  },
  {
    id: 2, lang: 'C', icon: '⚡', col: '#ff3232', rgb: '255,50,50',
    questions: [
      {
        title: 'MODULE: CIRCUIT CALIBRATOR',
        lines: [
          { c: 'cm', t: '/* Factorial using recursion */' },
          { t: '' },
          { c: 'fn', t: 'int factorial(int n) {' },
          { t: '    if (n == 0) return 0;', bug: true },
          { t: '    return n * factorial(n - 1);' },
          { t: '}' },
        ],
        bug: 'if (n == 0) return 0;',
        hint: 'Base case is wrong. 0! = 1, not 0.',
      },
      {
        title: 'MODULE: CIRCUIT CALIBRATOR',
        lines: [
          { c: 'cm', t: '/* Swap two integers */' },
          { t: '' },
          { c: 'fn', t: 'void swap(int *a, int *b) {' },
          { t: '    int temp = *a;' },
          { t: '    *a = *b;' },
          { t: '    *b = temp;' },
          { t: '    printf("%d %d", a, b);', bug: true },
          { t: '}' },
        ],
        bug: 'printf("%d %d", a, b);',
        hint: 'Printing addresses, not values. Missing dereference.',
      },
      {
        title: 'MODULE: CIRCUIT CALIBRATOR',
        lines: [
          { c: 'cm', t: '/* Count vowels in string */' },
          { t: '' },
          { c: 'fn', t: 'int countVowels(char *s) {' },
          { t: '    int count = 0;' },
          { t: "    for (int i = 0; s[i] != '\\0'; i++) {" },
          { t: '        if (strchr("aeiou", s[i]))' },
          { t: '            count++;' },
          { t: '    }' },
          { t: '    return count + 1;', bug: true },
          { t: '}' },
        ],
        bug: 'return count + 1;',
        hint: 'Off by one in return value.',
      },
      {
        title: 'MODULE: CIRCUIT CALIBRATOR',
        lines: [
          { c: 'cm', t: '/* Binary search */' },
          { t: '' },
          { c: 'fn', t: 'int bSearch(int a[], int n, int x) {' },
          { t: '    int l=0, r=n;', bug: true },
          { t: '    while (l <= r) {' },
          { t: '        int m = (l+r)/2;' },
          { t: '        if (a[m]==x) return m;' },
          { t: '        if (a[m]<x) l=m+1;' },
          { t: '        else r=m-1;' },
          { t: '    }' },
          { t: '    return -1;' },
          { t: '}' },
        ],
        bug: 'int l=0, r=n;',
        hint: 'r should be n-1, not n.',
      },
    ],
  },
  {
    id: 3, lang: 'PYTHON', icon: '🐍', col: '#ffa000', rgb: '255,160,0',
    questions: [
      {
        title: 'MODULE: FUSE CONTROLLER',
        lines: [
          { c: 'cm', t: '# Fibonacci sequence' },
          { t: '' },
          { c: 'fn', t: 'def fibonacci(n):' },
          { t: '    if n <= 0: return []' },
          { t: '    if n == 1: return [0]' },
          { t: '    fibs = [0, 1]' },
          { t: '    for i in range(2, n):' },
          { t: '        fibs.append(fibs[-1] + fibs[-2])' },
          { t: '    return fibs[n]', bug: true },
        ],
        bug: 'return fibs[n]',
        hint: 'Should return the whole list, not one element.',
      },
      {
        title: 'MODULE: FUSE CONTROLLER',
        lines: [
          { c: 'cm', t: '# Flatten nested list' },
          { t: '' },
          { c: 'fn', t: 'def flatten(lst):' },
          { t: '    result = []' },
          { t: '    for item in lst:' },
          { t: '        if isinstance(item, list):' },
          { t: '            result.append(flatten(item))', bug: true },
          { t: '        else:' },
          { t: '            result.append(item)' },
          { t: '    return result' },
        ],
        bug: 'result.append(flatten(item))',
        hint: 'Should extend, not append — else nested list added as one element.',
      },
      {
        title: 'MODULE: FUSE CONTROLLER',
        lines: [
          { c: 'cm', t: '# Count word frequency' },
          { t: '' },
          { c: 'fn', t: 'def word_freq(text):' },
          { t: '    freq = {}' },
          { t: '    for word in text.split():' },
          { t: '        if word in freq:' },
          { t: '            freq[word] =+ 1', bug: true },
          { t: '        else:' },
          { t: '            freq[word] = 1' },
          { t: '    return freq' },
        ],
        bug: 'freq[word] =+ 1',
        hint: '=+ is not += . Assigns +1 each time instead of incrementing.',
      },
      {
        title: 'MODULE: FUSE CONTROLLER',
        lines: [
          { c: 'cm', t: '# Check prime' },
          { t: '' },
          { c: 'fn', t: 'def is_prime(n):' },
          { t: '    if n < 2: return False' },
          { t: '    for i in range(2, n):', bug: true },
          { t: '        if n % i == 0:' },
          { t: '            return False' },
          { t: '    return True' },
        ],
        bug: 'for i in range(2, n):',
        hint: 'Range should be range(2, int(n**0.5)+1) for efficiency — but is it actually wrong?',
      },
    ],
  },
  {
    id: 4, lang: 'JAVA', icon: '☕', col: '#ffcc00', rgb: '255,200,0',
    questions: [
      {
        title: 'MODULE: POWER DISTRIBUTOR',
        lines: [
          { c: 'cm', t: '// String comparison bug' },
          { t: '' },
          { c: 'fn', t: 'public boolean areEqual(String a, String b) {' },
          { t: '    return a == b;', bug: true },
          { t: '}' },
        ],
        bug: 'return a == b;',
        hint: 'Use .equals() for string comparison in Java.',
      },
      {
        title: 'MODULE: POWER DISTRIBUTOR',
        lines: [
          { c: 'cm', t: '// NullPointerException risk' },
          { t: '' },
          { c: 'fn', t: 'public int getLength(String s) {' },
          { t: '    return s.length();', bug: true },
          { t: '}' },
          { t: '' },
          { c: 'cm', t: '// Called with: getLength(null)' },
        ],
        bug: 'return s.length();',
        hint: 'No null check before calling .length().',
      },
      {
        title: 'MODULE: POWER DISTRIBUTOR',
        lines: [
          { c: 'cm', t: '// Integer overflow' },
          { t: '' },
          { c: 'fn', t: 'public long sumTo(int n) {' },
          { t: '    long sum = 0;' },
          { t: '    for (int i = 1; i <= n; i++) {' },
          { t: '        sum += i * i;', bug: true },
          { t: '    }' },
          { t: '    return sum;' },
          { t: '}' },
        ],
        bug: 'sum += i * i;',
        hint: 'i*i computed as int before adding to long — overflow for large i.',
      },
      {
        title: 'MODULE: POWER DISTRIBUTOR',
        lines: [
          { c: 'cm', t: '// Array index out of bounds' },
          { t: '' },
          { c: 'fn', t: 'public int last(int[] arr) {' },
          { t: '    return arr[arr.length];', bug: true },
          { t: '}' },
        ],
        bug: 'return arr[arr.length];',
        hint: 'Last index is length-1, not length.',
      },
    ],
  },
];

// ─── API functions ──────────────────────────────────────────────────────────

/**
 * Fetch Round 1 MCQ questions.
 * @returns {Promise<typeof MOCK_ROUND1_QUESTIONS>}
 */
export async function getRound1Questions() {
  if (MOCK_MODE) {
    return structuredClone(MOCK_ROUND1_QUESTIONS);
  }
  const res = await fetch(`${BASE_URL}/round1/questions`);
  if (!res.ok) throw new Error(`Round 1 fetch failed: ${res.status}`);
  return res.json();
}

/**
 * Fetch Round 2 bug-hunt modules (all 4 languages).
 * @returns {Promise<typeof MOCK_ROUND2_MODULES>}
 */
export async function getRound2Modules() {
  if (MOCK_MODE) {
    return structuredClone(MOCK_ROUND2_MODULES);
  }
  const res = await fetch(`${BASE_URL}/round2/modules`);
  if (!res.ok) throw new Error(`Round 2 fetch failed: ${res.status}`);
  return res.json();
}
