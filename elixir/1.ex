defmodule Problem1 do
  @min 1
  @max 999
  @mults [3, 5]

  def sum_mult() do
    @min..@max
    |> Enum.filter(&is_mult(&1, @mults))
    |> Enum.sum()
  end

  defp is_mult(num, mults) do
    mults
    |> List.wrap()
    |> Enum.any?(&rem(num, &1) == 0)
  end
end