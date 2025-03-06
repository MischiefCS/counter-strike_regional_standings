### Roster Details<br />
Team Name: TYLOO<br />
Roster: Attacker, JamYoung, Jee, Mercury, Moseyuh<br />
Global Rank: [113](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [13]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  704.8<br />
<br />
Final Rank Value (704.8) = Starting Rank Value (708.8) + Head To Head Adjustments (-4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 708.8
- 400 + ( ( 0.149 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 708.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      337 | 2025-02-11 | Lynn Vision Gaming   | L   | 0.831      | -            | -                | -                | -         |   -12.51 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|            7 |      344 | 2025-02-11 | ATOX Esports         | L   | 0.829      | -            | -                | -                | -         |    -4.70 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|            6 |      346 | 2025-02-10 | Rare Atom            | L   | 0.829      | -            | -                | -                | -         |    -8.93 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|            5 |      468 | 2025-02-08 | DogEvil              | W   | 0.810      | 0.143        | 0.000 (0.000)    | 0.560 (0.065)    | 0 (0.000) |     6.38 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|            4 |      473 | 2025-02-08 | Harizma              | W   | 0.809      | 0.143        | 0.001 (0.000)    | 0.056 (0.007)    | 0 (0.000) |    10.35 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|            3 |     1698 | 2024-11-03 | Lynn Vision Gaming   | W   | 0.162      | 0.417        | 0.006 (0.000)    | 0.284 (0.019)    | 1 (0.162) |     2.71 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|            2 |     1718 | 2024-11-02 | ATOX Esports         | W   | 0.156      | 0.417        | 0.004 (0.000)    | 0.013 (0.001)    | 1 (0.156) |     2.12 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|            1 |     1940 | 2024-10-16 | Unsettled Resentment | W   | 0.043      | 0.417        | 0.002 (0.000)    | 0.215 (0.004)    | 1 (0.043) |     0.60 | JamYoung, Jee, Mercury, Moseyuh, Starry   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,436.81)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.162 | $15,000.00     | $2,436.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
