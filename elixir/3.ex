defmodule Problem3 do
  @max 600851475143

  def max_factor() do
    {2, @max}
    |> fermat_factorize()
  end

  defp fermat_factorize({n, factor}) do
    cond do
      :math.pow(n, 2) > factor -> factor
      rem(factor, n) == 0 -> fermat_factorize({n, div(factor, n)})
      true -> fermat_factorize({n + 1, factor})
    end
  end
end
