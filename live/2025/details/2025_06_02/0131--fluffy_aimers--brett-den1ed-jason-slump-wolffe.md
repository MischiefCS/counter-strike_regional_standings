### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, den1ed, jason, slump, Wolffe<br />
Global Rank: [131](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [39]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  411.7<br />
<br />
Final Rank Value (411.7) = Starting Rank Value (411.9) + Head To Head Adjustments (-0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.020[<sup>2</sup>](#table1)

The average of these factors is 0.005<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 411.9
- 400 + ( ( 0.005 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 411.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      863 | 2024-12-14 | Party Astronauts   | L   | 0.066      | -            | -                | -                | -         |    -0.80 | brett, den1ed, jason, slump, Wolffe |
|            5 |      961 | 2024-12-08 | BOSS               | L   | 0.025      | -            | -                | -                | -         |    -0.17 | brett, jason, nooz, slump, Wolffe   |
|            4 |      974 | 2024-12-07 | Party Astronauts   | W   | 0.021      | 0.384        | 0.000 (0.000)    | 0.335 (0.003)    | 1 (0.021) |     0.40 | brett, jason, nooz, slump, Wolffe   |
|            3 |      978 | 2024-12-07 | Bad News Capybaras | W   | 0.020      | 0.384        | 0.000 (0.000)    | 0.023 (0.000)    | 1 (0.020) |     0.38 | brett, jason, nooz, slump, Wolffe   |
|            2 |      986 | 2024-12-07 | What's for Dinner  | W   | 0.018      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.018) |     0.28 | brett, jason, nooz, slump, Wolffe   |
|            1 |     1000 | 2024-12-06 | ROOMBA PEEK        | L   | 0.014      | -            | -                | -                | -         |    -0.23 | brett, jason, nooz, slump, Wolffe   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
