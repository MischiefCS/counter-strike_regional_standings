### Roster Details<br />
Team Name: Game Hunters<br />
Roster: abr, mello, nolkz, prt, slashzz<br />
Global Rank: [144](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [34]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  578.4<br />
<br />
Final Rank Value (578.4) = Starting Rank Value (605.1) + Head To Head Adjustments (-26.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.203[<sup>1</sup>](#table2)
- Bounty Collected: 0.162[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.094<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 605.1
- 400 + ( ( 0.094 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 605.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      177 | 2025-02-17 | Players (Brazilian team) | L   | 0.687      | -            | -                | -                | -         |    -6.91 | abr, mello, nolkz, prt, slashzz  |
|           11 |      222 | 2025-02-15 | KRÜ Esports              | W   | 0.674      | 0.371        | 0.000 (0.000)    | 0.144 (0.036)    | 0 (0.000) |     5.53 | abr, mello, nolkz, prt, slashzz  |
|           10 |      270 | 2025-02-14 | ShindeN                  | L   | 0.664      | -            | -                | -                | -         |   -12.67 | abr, mello, nolkz, prt, slashzz  |
|            9 |      303 | 2025-02-12 | Team Solid               | L   | 0.653      | -            | -                | -                | -         |    -5.89 | abr, mello, nolkz, prt, slashzz  |
|            8 |      397 | 2025-02-09 | AdalYamigos              | W   | 0.632      | 0.371        | 0.000 (0.000)    | 0.208 (0.049)    | 0 (0.000) |     7.74 | abr, mello, nolkz, prt, slashzz  |
|            7 |      484 | 2025-02-07 | BESTIA                   | L   | 0.620      | -            | -                | -                | -         |    -4.28 | abr, mello, nolkz, prt, slashzz  |
|            6 |      707 | 2025-01-09 | Fake do Biru             | L   | 0.426      | -            | -                | -                | -         |    -7.87 | abr, mello, nolkz, pedrinzy, prt |
|            5 |      776 | 2024-12-21 | LaChampionsLiga          | W   | 0.299      | 0.384        | 0.000 (0.000)    | 0.138 (0.016)    | 0 (0.000) |     3.60 | abr, Lich, mello, pedrinzy, prt  |
|            4 |      787 | 2024-12-20 | Fake do Biru             | L   | 0.291      | -            | -                | -                | -         |    -5.50 | abr, Lich, mello, pedrinzy, prt  |
|            3 |      826 | 2024-12-17 | 20/70                    | W   | 0.271      | 0.384        | 0.001 (0.000)    | 0.064 (0.007)    | 0 (0.000) |     3.40 | abr, Lich, mello, pedrinzy, prt  |
|            2 |      900 | 2024-12-13 | Bad News Chickens        | L   | 0.244      | -            | -                | -                | -         |    -3.89 | abr, Lich, mello, pedrinzy, prt  |
|            1 |     1617 | 2024-11-08 | Sharks Esports           | L   | 0.012      | -            | -                | -                | -         |    -0.06 | abr, Lich, mello, pedrinzy, prt  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14.88)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.020 | $750.00        | $14.88          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
