### Roster Details<br />
Team Name: Nemiga Gaming<br />
Roster: 1eeR, khaN, riskyb0b, Xant3r, zweih<br />
Global Rank: [61](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [41]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  723.0<br />
<br />
Final Rank Value (723.0) = Starting Rank Value (738.7) + Head To Head Adjustments (-15.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.7
- 400 + ( ( 0.146 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 738.7


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
|           10 |      147 | 2025-02-21 | CYBERSHOKE Esports | L   | 0.523      | -            | -                | -                | -         |    -6.46 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            9 |      269 | 2025-02-14 | B8                 | L   | 0.478      | -            | -                | -                | -         |    -3.25 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            8 |      298 | 2025-02-13 | Sashi Esport       | W   | 0.469      | 0.435        | 0.001 (0.000)    | 0.507 (0.103)    | 0 (0.000) |     7.64 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            7 |      342 | 2025-02-11 | Metizport          | L   | 0.456      | -            | -                | -                | -         |    -7.56 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            6 |      367 | 2025-02-10 | TEAM NEXT LEVEL    | W   | 0.451      | 0.143        | 0.001 (0.000)    | 0.159 (0.010)    | 0 (0.000) |     5.89 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            5 |      375 | 2025-02-10 | BetBoom Team       | L   | 0.449      | -            | -                | -                | -         |    -3.98 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            4 |      530 | 2025-02-06 | PARIVISION         | L   | 0.423      | -            | -                | -                | -         |    -9.01 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            3 |      558 | 2025-02-05 | Imperial Female    | W   | 0.417      | 0.143        | 0.089 (0.005)    | 0.000 (0.000)    | 0 (0.000) |     5.41 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            2 |      566 | 2025-02-05 | B8                 | L   | 0.416      | -            | -                | -                | -         |    -2.87 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            1 |      678 | 2025-01-17 | FURIA              | L   | 0.291      | -            | -                | -                | -         |    -1.51 | 1eeR, khaN, riskyb0b, Xant3r, zweih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($970.37)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.485 | $2,000.00      | $970.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
