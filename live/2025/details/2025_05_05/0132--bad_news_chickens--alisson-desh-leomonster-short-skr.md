### Roster Details<br />
Team Name: Bad News Chickens<br />
Roster: Alisson, desh, Leomonster, short, Skr<br />
Global Rank: [132](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [31]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  610.2<br />
<br />
Final Rank Value (610.2) = Starting Rank Value (602.8) + Head To Head Adjustments (7.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.222[<sup>1</sup>](#table2)
- Bounty Collected: 0.144[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.093<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 602.8
- 400 + ( ( 0.093 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 602.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      812 | 2024-12-18 | LaChampionsLiga | W   | 0.278      | 0.384        | 0.000 (0.000)    | 0.138 (0.015)    | 0 (0.000) |     3.32 | Alisson, desh, Leomonster, short, Skr |
|            4 |      829 | 2024-12-16 | UNO MILLE       | W   | 0.266      | 0.384        | 0.000 (0.000)    | 0.309 (0.032)    | 0 (0.000) |     3.04 | Alisson, desh, Leomonster, short, Skr |
|            3 |      900 | 2024-12-13 | Game Hunters    | W   | 0.244      | 0.384        | 0.000 (0.000)    | 0.208 (0.020)    | 0 (0.000) |     3.89 | Alisson, desh, Leomonster, short, Skr |
|            2 |     1219 | 2024-11-27 | TROPA DO TACO   | L   | 0.137      | -            | -                | -                | -         |    -1.86 | Alisson, desh, Leomonster, short, Skr |
|            1 |     1395 | 2024-11-17 | TROPA DO TACO   | L   | 0.073      | -            | -                | -                | -         |    -1.01 | Alisson, desh, Leomonster, short, Skr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37.66)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.073 | $517.51        | $37.66          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
