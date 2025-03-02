### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, emy, GooseBreeder, marie, vanessa<br />
Global Rank: [352](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [72]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  613.2<br />
<br />
Final Rank Value (613.2) = Starting Rank Value (645.6) + Head To Head Adjustments (-32.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 645.6
- 400 + ( ( 0.125 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 645.6


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
|           12 |      376 | 2025-02-09 | Exceritus        | L   | 1.000      | -            | -                | -                | -         |   -17.00 | BiBiAhn, emy, GooseBreeder, marie, vanessa  |
|           11 |      424 | 2025-02-08 | InControl        | L   | 1.000      | -            | -                | -                | -         |   -15.97 | BiBiAhn, emy, GooseBreeder, marie, vanessa  |
|           10 |     2477 | 2024-11-23 | Eco Warriors     | L   | 0.544      | -            | -                | -                | -         |    -5.33 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            9 |     2555 | 2024-11-22 | Fluxo Demons     | L   | 0.538      | -            | -                | -                | -         |    -5.38 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            8 |     4379 | 2024-10-18 | Aware Impact     | W   | 0.308      | 0.333        | 0.001 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     4.08 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            7 |     5214 | 2024-10-02 | Blue Otter Karma | W   | 0.202      | 0.333        | 0.001 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.73 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            6 |     5623 | 2024-09-26 | Lotus            | W   | 0.162      | 0.333        | 0.001 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     2.18 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            5 |     6095 | 2024-09-19 | Imp Pact         | W   | 0.115      | 0.333        | 0.002 (0.000)    | 0.035 (0.001)    | 0 (0.000) |     1.66 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            4 |     6333 | 2024-09-15 | Arf Squad        | L   | 0.088      | -            | -                | -                | -         |    -1.60 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            3 |     6380 | 2024-09-14 | Imp Pact         | W   | 0.082      | 0.250        | 0.002 (0.000)    | 0.035 (0.001)    | 0 (0.000) |     1.19 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            2 |     6579 | 2024-09-11 | Nouns.fe         | W   | 0.062      | 0.333        | 0.001 (0.000)    | 0.078 (0.002)    | 0 (0.000) |     0.88 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            1 |     7039 | 2024-09-04 | TSM Impact       | W   | 0.015      | 0.333        | 0.001 (0.000)    | 0.025 (0.000)    | 0 (0.000) |     0.21 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,232.50)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.553 | $4,000.00      | $2,210.56       |
| 2024-09-15 |      0.088 | $250.00        | $21.94          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
