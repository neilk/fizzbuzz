global <<< require('prelude-ls')

m = (mod, str) -> 
  (n) ->
    if typeof n == 'number' && !(n % mod) then str else n

f = m(3, 'Fizz') << m(5, 'Buzz') << m(15, 'FizzBuzz')

p = (x) ->
  console.log(x)

[1 to 100] |> map f |> map p
