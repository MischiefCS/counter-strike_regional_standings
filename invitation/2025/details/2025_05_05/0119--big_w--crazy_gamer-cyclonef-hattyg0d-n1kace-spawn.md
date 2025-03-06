### Roster Details<br />
Team Name: Big W<br />
Roster: Crazy_Gamer, CycloneF, hattyg0d, N1kace, SpawN<br />
Global Rank: [119](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [13]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  658.7<br />
<br />
Final Rank Value (658.7) = Starting Rank Value (669.8) + Head To Head Adjustments (-11.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.013[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.8
- 400 + ( ( 0.124 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 669.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |        9 | 2025-02-28 | Victores Sumus   | L   | 0.756      | -            | -                | -                | -         |    -6.02 | Crazy_Gamer, CycloneF, hattyg0d, N1kace, SpawN |
|            5 |       20 | 2025-02-26 | Flashback Gaming | L   | 0.749      | -            | -                | -                | -         |    -8.39 | Crazy_Gamer, CycloneF, hattyg0d, N1kace, SpawN |
|            4 |      883 | 2024-12-14 | Gods Reign       | L   | 0.249      | -            | -                | -                | -         |    -1.15 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            3 |      885 | 2024-12-13 | St4rboys         | W   | 0.248      | 0.262        | 0.001 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     3.51 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            2 |     1416 | 2024-11-16 | Flashback Gaming | L   | 0.068      | -            | -                | -                | -         |    -0.78 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            1 |     1436 | 2024-11-16 | Gods Reign       | W   | 0.063      | 0.143        | 0.020 (0.000)    | 0.335 (0.003)    | 1 (0.063) |     1.69 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($642.11)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-01 |      0.763 | $572.64        | $436.70         |
| 2024-12-14 |      0.249 | $500.00        | $124.49         |
| 2024-11-16 |      0.068 | $1,183.74      | $80.92          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
