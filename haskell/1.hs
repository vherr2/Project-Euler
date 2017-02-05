import qualified Data.Set as Set

mults n start end = [x | x <- [start..end], (x `mod` n) == 0]
multsArr arr start' end' = sum (Set.fromList $ concat [ mults n' start' end' | n' <- arr])