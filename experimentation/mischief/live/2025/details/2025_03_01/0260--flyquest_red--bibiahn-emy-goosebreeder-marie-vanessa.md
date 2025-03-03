### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, emy, GooseBreeder, marie, vanessa<br />
Global Rank: [260](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [63]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  615.4<br />
<br />
Final Rank Value (615.4) = Starting Rank Value (648.8) + Head To Head Adjustments (-33.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 648.8
- 400 + ( ( 0.127 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 648.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      527 | 2025-02-09 | Exceritus        | L   | 1.000      | -            | -                | -                | -         |   -16.03 | BiBiAhn, emy, GooseBreeder, marie, vanessa  |
|           10 |      582 | 2025-02-08 | InControl        | L   | 1.000      | -            | -                | -                | -         |   -16.49 | BiBiAhn, emy, GooseBreeder, marie, vanessa  |
|            9 |     2403 | 2024-11-23 | Eco Warriors     | L   | 0.544      | -            | -                | -                | -         |    -5.43 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            8 |     2453 | 2024-11-22 | Fluxo Demons     | L   | 0.538      | -            | -                | -                | -         |    -5.74 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            7 |     3489 | 2024-10-18 | Aware Impact     | W   | 0.308      | 0.333        | 0.001 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     4.06 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            6 |     3874 | 2024-10-02 | Blue Otter Karma | W   | 0.201      | 0.333        | 0.001 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.70 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            5 |     4084 | 2024-09-26 | Lotus            | W   | 0.161      | 0.333        | 0.001 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     2.15 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            4 |     4356 | 2024-09-19 | Supernova Comets | W   | 0.115      | 0.333        | 0.011 (0.000)    | 0.154 (0.006)    | 0 (0.000) |     1.91 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            3 |     4477 | 2024-09-15 | Arf Squad        | L   | 0.087      | -            | -                | -                | -         |    -1.62 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            2 |     4606 | 2024-09-11 | Nouns.fe         | W   | 0.061      | 0.333        | 0.001 (0.000)    | 0.085 (0.002)    | 0 (0.000) |     0.86 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            1 |     4802 | 2024-09-04 | TSM Impact       | W   | 0.015      | 0.333        | 0.001 (0.000)    | 0.027 (0.000)    | 0 (0.000) |     0.21 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,232.43)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.553 | $4,000.00      | $2,210.56       |
| 2024-09-15 |      0.087 | $250.00        | $21.88          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
