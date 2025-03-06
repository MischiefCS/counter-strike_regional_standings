### Roster Details<br />
Team Name: Nemiga Gaming<br />
Roster: 1eeR, khaN, riskyb0b, Xant3r, zweih<br />
Global Rank: [42](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [29]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  729.7<br />
<br />
Final Rank Value (729.7) = Starting Rank Value (743.1) + Head To Head Adjustments (-13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 743.1
- 400 + ( ( 0.139 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 743.1


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
|           10 |      147 | 2025-02-21 | CYBERSHOKE Esports | L   | 0.290      | -            | -                | -                | -         |    -3.83 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            9 |      269 | 2025-02-14 | B8                 | L   | 0.244      | -            | -                | -                | -         |    -1.84 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            8 |      298 | 2025-02-13 | Sashi Esport       | W   | 0.236      | 0.435        | 0.000 (0.000)    | 0.523 (0.054)    | 0 (0.000) |     2.06 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            7 |      342 | 2025-02-11 | Metizport          | L   | 0.223      | -            | -                | -                | -         |    -5.42 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            6 |      367 | 2025-02-10 | TEAM NEXT LEVEL    | W   | 0.218      | 0.143        | 0.000 (0.000)    | 0.162 (0.005)    | 0 (0.000) |     1.57 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            5 |      375 | 2025-02-10 | BetBoom Team       | L   | 0.216      | -            | -                | -                | -         |    -2.40 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            4 |      530 | 2025-02-06 | PARIVISION         | L   | 0.189      | -            | -                | -                | -         |    -4.24 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            3 |      558 | 2025-02-05 | Imperial Female    | W   | 0.184      | 0.143        | 0.088 (0.002)    | 0.000 (0.000)    | 0 (0.000) |     2.52 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            2 |      566 | 2025-02-05 | B8                 | L   | 0.183      | -            | -                | -                | -         |    -1.41 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            1 |      678 | 2025-01-17 | FURIA              | L   | 0.057      | -            | -                | -                | -         |    -0.39 | 1eeR, khaN, riskyb0b, Xant3r, zweih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($503.70)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.252 | $2,000.00      | $503.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
