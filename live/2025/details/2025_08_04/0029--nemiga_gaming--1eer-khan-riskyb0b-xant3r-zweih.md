### Roster Details<br />
Team Name: Nemiga Gaming<br />
Roster: 1eeR, khaN, riskyb0b, Xant3r, zweih<br />
Global Rank: [29](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [20]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  626.8<br />
<br />
Final Rank Value (626.8) = Starting Rank Value (628.3) + Head To Head Adjustments (-1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.087<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 628.3
- 400 + ( ( 0.087 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 628.3


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
|            7 |      147 | 2025-02-21 | CYBERSHOKE Esports | L   | 0.103      | -            | -                | -                | -         |    -0.86 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            6 |      269 | 2025-02-14 | B8                 | L   | 0.058      | -            | -                | -                | -         |    -0.20 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            5 |      298 | 2025-02-13 | Sashi Esport       | W   | 0.049      | 0.435        | 0.000 (0.000)    | 0.318 (0.007)    | 0 (0.000) |     0.59 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            4 |      342 | 2025-02-11 | Metizport          | L   | 0.036      | -            | -                | -                | -         |    -0.75 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            3 |      367 | 2025-02-10 | TEAM NEXT LEVEL    | W   | 0.031      | 0.143        | 0.000 (0.000)    | 0.056 (0.000)    | 0 (0.000) |     0.33 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            2 |      375 | 2025-02-10 | BetBoom Team       | L   | 0.029      | -            | -                | -                | -         |    -0.62 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            1 |      530 | 2025-02-06 | PARIVISION         | L   | 0.003      | -            | -                | -                | -         |    -0.05 | 1eeR, khaN, riskyb0b, Xant3r, zweih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($130.37)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.065 | $2,000.00      | $130.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
