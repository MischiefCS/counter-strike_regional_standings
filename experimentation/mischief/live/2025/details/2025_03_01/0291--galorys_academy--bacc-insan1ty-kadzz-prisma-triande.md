### Roster Details<br />
Team Name: Galorys Academy<br />
Roster: bacc, insan1ty, Kadzz, prisma, triande<br />
Global Rank: [291](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [75]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  571.1<br />
<br />
Final Rank Value (571.1) = Starting Rank Value (607.9) + Head To Head Adjustments (-36.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.247[<sup>1</sup>](#table2)
- Bounty Collected: 0.166[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.106<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 607.9
- 400 + ( ( 0.106 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 607.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1336 | 2024-12-19 | Nitro.GG           | L   | 0.719      | -            | -                | -                | -         |    -8.56 | bacc, insan1ty, Kadzz, prisma, triande  |
|           11 |     1367 | 2024-12-17 | América eSports    | W   | 0.706      | 0.384        | 0.000 (0.000)    | 0.389 (0.106)    | 0 (0.000) |    10.71 | bacc, insan1ty, Kadzz, prisma, triande  |
|           10 |     1414 | 2024-12-15 | Patins da Ferrari  | L   | 0.692      | -            | -                | -                | -         |   -12.54 | bacc, insan1ty, Kadzz, prisma, triande  |
|            9 |     1515 | 2024-12-13 | UNO MILLE          | L   | 0.681      | -            | -                | -                | -         |    -5.72 | bacc, insan1ty, Kadzz, prisma, triande  |
|            8 |     2184 | 2024-11-29 | RED Canids Academy | L   | 0.587      | -            | -                | -                | -         |    -7.88 | bacc, insan1ty, Kadzz, prisma, triande  |
|            7 |     3060 | 2024-11-05 | UNO MILLE          | L   | 0.429      | -            | -                | -                | -         |    -3.92 | bacc, insan1ty, Kadzz, prisma, triande  |
|            6 |     3088 | 2024-11-04 | Fluxo              | L   | 0.422      | -            | -                | -                | -         |    -1.80 | bacc, insan1ty, Kadzz, prisma, triande  |
|            5 |     3117 | 2024-11-03 | Intense Game       | L   | 0.415      | -            | -                | -                | -         |    -5.80 | bacc, insan1ty, Kadzz, prisma, triande  |
|            4 |     3177 | 2024-11-02 | América eSports    | W   | 0.409      | 0.143        | 0.000 (0.000)    | 0.389 (0.023)    | 0 (0.000) |     5.96 | bacc, insan1ty, Kadzz, prisma, reg1no.O |
|            3 |     3240 | 2024-11-01 | ODDIK              | L   | 0.401      | -            | -                | -                | -         |    -3.17 | bacc, insan1ty, Kadzz, prisma, triande  |
|            2 |     3323 | 2024-10-30 | Team Solid         | L   | 0.386      | -            | -                | -                | -         |    -2.80 | bacc, insan1ty, Kadzz, prisma, triande  |
|            1 |     3353 | 2024-10-29 | Sharks Esports     | L   | 0.381      | -            | -                | -                | -         |    -1.31 | bacc, insan1ty, Kadzz, prisma, triande  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($296.14)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-05 |      0.429 | $690.60        | $296.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
