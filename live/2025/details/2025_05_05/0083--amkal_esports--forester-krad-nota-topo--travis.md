### Roster Details<br />
Team Name: AMKAL ESPORTS<br />
Roster: Forester, Krad, nota, topo-, TRAVIS<br />
Global Rank: [83](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [59]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  739.1<br />
<br />
Final Rank Value (739.1) = Starting Rank Value (725.6) + Head To Head Adjustments (13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 725.6
- 400 + ( ( 0.149 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 725.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      782 | 2024-12-21 | Monte           | W   | 0.297      | 0.333        | 0.015 (0.001)    | 0.408 (0.040)    | 0 (0.000) |     5.50 | Forester, Krad, nota, topo-, TRAVIS |
|            4 |      793 | 2024-12-20 | FORZE Reload    | W   | 0.290      | 0.333        | 0.015 (0.001)    | 0.070 (0.007)    | 0 (0.000) |     4.35 | Forester, Krad, nota, topo-, TRAVIS |
|            3 |      807 | 2024-12-19 | BC.Game Esports | W   | 0.283      | 0.333        | 0.017 (0.002)    | 0.124 (0.012)    | 0 (0.000) |     4.57 | Forester, Krad, nota, topo-, TRAVIS |
|            2 |      869 | 2024-12-14 | ENCE            | L   | 0.252      | -            | -                | -                | -         |    -3.15 | Forester, Krad, nota, topo-, TRAVIS |
|            1 |      897 | 2024-12-13 | Wild Lotus      | W   | 0.245      | 0.435        | 0.000 (0.000)    | 0.267 (0.028)    | 0 (0.000) |     2.16 | Forester, Krad, nota, topo-, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,001.25)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.297 | $5,000.00      | $1,485.42       |
| 2024-12-15 |      0.258 | $2,000.00      | $515.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
