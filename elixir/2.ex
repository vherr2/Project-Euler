defmodule Problem2 do
  @n_0 1
  @n_1 2
  @max 4_000_000

  def sum_even_fib() do
    fibonacci_stream()
    |> Stream.take_while(&(&1 < @max))
    |> Enum.reduce(0, &sum_even/2)
  end

  defp fibonacci_stream(), do: Stream.unfold({@n_0, @n_1}, fn {a, b} -> {a, {b, a + b}} end)

  defp sum_even(num, acc) when rem(num, 2) == 0, do: num + acc
  defp sum_even(_, acc), do: acc
end