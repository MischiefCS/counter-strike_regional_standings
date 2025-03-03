### Roster Details<br />
Team Name: INTERDIT<br />
Roster: KLR, kxr, polarzyn, respect, vzn<br />
Global Rank: [277](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [70]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  589.7<br />
<br />
Final Rank Value (589.7) = Starting Rank Value (609.0) + Head To Head Adjustments (-19.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.198[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 609.0
- 400 + ( ( 0.107 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 609.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     2097 | 2024-11-30 | Sharks Youngsters     | L   | 0.594      | -            | -                | -                | -         |    -9.82 | KLR, kxr, polarzyn, respect, vzn        |
|           11 |     2113 | 2024-11-30 | VELOX Argentina       | L   | 0.594      | -            | -                | -                | -         |   -11.23 | KLR, kxr, polarzyn, respect, vzn        |
|           10 |     2263 | 2024-11-26 | América eSports       | L   | 0.568      | -            | -                | -                | -         |   -10.16 | freitas, kxr, polarzyn, respect, vzn    |
|            9 |     2325 | 2024-11-24 | DB Peek Esports       | W   | 0.553      | 0.143        | 0.000 (0.000)    | 0.257 (0.020)    | 0 (0.000) |     6.85 | freitas, kxr, polarzyn, respect, vzn    |
|            8 |     2353 | 2024-11-23 | ArtGamerz             | W   | 0.547      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.03 | freitas, kxr, polarzyn, respect, vzn    |
|            7 |     2373 | 2024-11-23 | Guará eSports         | W   | 0.547      | 0.143        | 0.000 (0.000)    | 0.034 (0.003)    | 0 (0.000) |     5.54 | freitas, kxr, polarzyn, respect, vzn    |
|            6 |     2863 | 2024-11-10 | Team Leveling         | L   | 0.460      | -            | -                | -                | -         |    -9.71 | freitas, kxr, polarzyn, respect, spider |
|            5 |     2908 | 2024-11-09 | Nova holanda          | W   | 0.454      | 0.143        | 0.000 (0.000)    | 0.107 (0.007)    | 0 (0.000) |     6.93 | freitas, kxr, polarzyn, respect, spider |
|            4 |     2914 | 2024-11-09 | Peak Academy          | L   | 0.454      | -            | -                | -                | -         |    -9.28 | freitas, kxr, polarzyn, respect, spider |
|            3 |     3093 | 2024-11-04 | Nova holanda          | L   | 0.421      | -            | -                | -                | -         |    -6.90 | freitas, kxr, polarzyn, respect, vzn    |
|            2 |     3181 | 2024-11-02 | FURIA Esports Female  | W   | 0.408      | 0.143        | 0.064 (0.004)    | 0.226 (0.013)    | 0 (0.000) |    11.43 | freitas, kxr, polarzyn, respect, vzn    |
|            1 |     3195 | 2024-11-02 | Floripa Stars Academy | W   | 0.407      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.02 | freitas, kxr, polarzyn, respect, vzn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29.37)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-26 |      0.568 | $51.74         | $29.37          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
