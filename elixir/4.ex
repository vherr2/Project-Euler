defmodule Problem4 do
  @min 100
  @max 999

  def max_palindrome() do
    @min..@max
    |> Enum.flat_map(fn i -> Enum.map(@min..@max, &(&1 * i)) end)
    |> Enum.filter(&palindrome?/1)
    |> Enum.max()
  end

  defp palindrome?(n), do: n |> to_string() |> String.reverse() |> String.to_integer() |> Kernel.==(n)
end
