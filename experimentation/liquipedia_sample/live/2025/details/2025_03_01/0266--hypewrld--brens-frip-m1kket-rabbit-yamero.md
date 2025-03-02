### Roster Details<br />
Team Name: Hypewrld<br />
Roster: Brens, Frip, m1kket, rabbit, Yamero<br />
Global Rank: [266](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [182]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  660.8<br />
<br />
Final Rank Value (660.8) = Starting Rank Value (639.2) + Head To Head Adjustments (21.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 639.2
- 400 + ( ( 0.121 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 639.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1236 | 2024-12-15 | Way2go (Latvian team) | W   | 0.693      | 0.256        | 0.000 (0.000)    | 0.129 (0.023)    | 0 (0.000) |     9.71 | Brens, Frip, m1kket, rabbit, Yamero |
|           11 |     1260 | 2024-12-15 | EC BANGA              | W   | 0.691      | 0.256        | 0.001 (0.000)    | 0.107 (0.019)    | 0 (0.000) |     6.69 | Brens, Frip, m1kket, rabbit, Yamero |
|           10 |     2239 | 2024-11-27 | 500 Rush              | L   | 0.574      | -            | -                | -                | -         |    -8.69 | Brens, Frip, m1kket, rabbit, Yamero |
|            9 |     2584 | 2024-11-21 | SkyFury               | W   | 0.533      | 0.284        | 0.004 (0.001)    | 0.345 (0.052)    | 0 (0.000) |     9.20 | Brens, Frip, m1kket, rabbit, Yamero |
|            8 |     2674 | 2024-11-20 | DEPO                  | L   | 0.526      | -            | -                | -                | -         |    -5.73 | Brens, Frip, m1kket, rabbit, Yamero |
|            7 |     2703 | 2024-11-19 | Sunshine!             | W   | 0.520      | 0.256        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.94 | Brens, Frip, m1kket, rabbit, Yamero |
|            6 |     2781 | 2024-11-17 | HAVENs                | W   | 0.507      | 0.256        | 0.000 (0.000)    | 0.099 (0.013)    | 0 (0.000) |     3.46 | Brens, Frip, m1kket, rabbit, Yamero |
|            5 |     3189 | 2024-11-10 | EC BANGA              | W   | 0.460      | 0.256        | 0.001 (0.000)    | 0.107 (0.013)    | 0 (0.000) |     4.93 | Brens, Frip, m1kket, rabbit, Yamero |
|            4 |     3968 | 2024-10-27 | INWESKO               | L   | 0.367      | -            | -                | -                | -         |    -8.18 | Brens, Frip, m1kket, rabbit, Yamero |
|            3 |     4563 | 2024-10-15 | MightyWolves          | W   | 0.286      | 0.256        | 0.000 (0.000)    | 0.044 (0.003)    | 0 (0.000) |     1.89 | Brens, Frip, m1kket, rabbit, Yamero |
|            2 |     4897 | 2024-10-08 | CyberMAN              | W   | 0.240      | 0.256        | 0.000 (0.000)    | 0.064 (0.004)    | 0 (0.000) |     2.22 | Brens, Frip, m1kket, rabbit, Yamero |
|            1 |     4991 | 2024-10-06 | Way2go (Latvian team) | W   | 0.227      | 0.256        | 0.000 (0.000)    | 0.129 (0.008)    | 0 (0.000) |     3.11 | Brens, Frip, m1kket, rabbit, Yamero |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($728.31)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.693 | $1,050.48      | $728.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
