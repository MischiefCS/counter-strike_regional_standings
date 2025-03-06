### Roster Details<br />
Team Name: Bad News Chickens<br />
Roster: Alisson, desh, Leomonster, short, Skr<br />
Global Rank: [155](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [40]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  642.4<br />
<br />
Final Rank Value (642.4) = Starting Rank Value (630.7) + Head To Head Adjustments (11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.237[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 630.7
- 400 + ( ( 0.112 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 630.7


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
|            6 |      812 | 2024-12-18 | LaChampionsLiga | W   | 0.465      | 0.384        | 0.000 (0.000)    | 0.173 (0.031)    | 0 (0.000) |     7.03 | Alisson, desh, Leomonster, short, Skr |
|            5 |      829 | 2024-12-16 | UNO MILLE       | W   | 0.452      | 0.384        | 0.004 (0.001)    | 0.368 (0.064)    | 0 (0.000) |     8.09 | Alisson, desh, Leomonster, short, Skr |
|            4 |      900 | 2024-12-13 | Game Hunters    | W   | 0.431      | 0.384        | 0.001 (0.000)    | 0.262 (0.043)    | 0 (0.000) |     7.22 | Alisson, desh, Leomonster, short, Skr |
|            3 |     1219 | 2024-11-27 | TROPA DO TACO   | L   | 0.324      | -            | -                | -                | -         |    -4.26 | Alisson, desh, Leomonster, short, Skr |
|            2 |     1395 | 2024-11-17 | TROPA DO TACO   | L   | 0.259      | -            | -                | -                | -         |    -3.61 | Alisson, desh, Leomonster, short, Skr |
|            1 |     1647 | 2024-11-06 | Game Hunters    | L   | 0.185      | -            | -                | -                | -         |    -2.80 | Alisson, desh, Leomonster, short, Skr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($134.27)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.259 | $517.51        | $134.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
