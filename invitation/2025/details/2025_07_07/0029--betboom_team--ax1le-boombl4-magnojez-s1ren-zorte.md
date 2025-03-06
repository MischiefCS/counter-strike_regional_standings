### Roster Details<br />
Team Name: BetBoom Team<br />
Roster: Ax1Le, Boombl4, Magnojez, s1ren, zorte<br />
Global Rank: [29](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [21]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  850.6<br />
<br />
Final Rank Value (850.6) = Starting Rank Value (851.3) + Head To Head Adjustments (-0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.450[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 851.3
- 400 + ( ( 0.183 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 851.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      331 | 2025-02-11 | Astralis          | L   | 0.225      | -            | -                | -                | -         |    -0.01 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|           10 |      338 | 2025-02-11 | Hesta             | W   | 0.224      | 0.143        | 0.000 (0.000)    | 0.456 (0.015)    | 0 (0.000) |     1.05 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            9 |      366 | 2025-02-10 | Team Falcons      | L   | 0.218      | -            | -                | -                | -         |    -0.01 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            8 |      375 | 2025-02-10 | Nemiga Gaming     | W   | 0.216      | 0.143        | 0.010 (0.000)    | 0.251 (0.008)    | 0 (0.000) |     2.40 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            7 |      503 | 2025-02-07 | Passion UA        | L   | 0.196      | -            | -                | -                | -         |    -3.92 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            6 |      531 | 2025-02-06 | Ninjas in Pyjamas | W   | 0.189      | 0.143        | 0.000 (0.000)    | 0.688 (0.019)    | 0 (0.000) |     0.45 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            5 |      559 | 2025-02-05 | Passion UA        | L   | 0.184      | -            | -                | -                | -         |    -3.71 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            4 |      569 | 2025-02-05 | Ninjas in Pyjamas | W   | 0.183      | 0.143        | 0.000 (0.000)    | 0.688 (0.018)    | 0 (0.000) |     0.42 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            3 |      666 | 2025-01-23 | G2 Esports        | L   | 0.098      | -            | -                | -                | -         |    -0.70 | Ax1Le, KaiR0N-, Magnojez, nafany, s1ren |
|            2 |      670 | 2025-01-19 | FURIA             | W   | 0.070      | 0.363        | 0.043 (0.001)    | 0.136 (0.003)    | 0 (0.000) |     1.47 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            1 |      677 | 2025-01-17 | MOUZ              | W   | 0.058      | 0.363        | 1.000 (0.021)    | 0.651 (0.014)    | 0 (0.000) |     1.83 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,937.50)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-26 |      0.117 | $25,000.00     | $2,937.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
