### Roster Details<br />
Team Name: MIBR Female<br />
Roster: Babs, dani, GaBi, jelly, lexy<br />
Global Rank: [233](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [53]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  640.0<br />
<br />
Final Rank Value (640.0) = Starting Rank Value (627.3) + Head To Head Adjustments (12.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 627.3
- 400 + ( ( 0.116 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 627.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3494 | 2024-10-18 | União BRARG          | W   | 0.307      | 0.323        | 0.001 (0.000)    | 0.070 (0.007)    | 0 (0.000) |     4.60 | Babs, dani, GaBi, jelly, lexy     |
|            9 |     3887 | 2024-10-02 | FURIA Esports Female | L   | 0.200      | -            | -                | -                | -         |    -0.78 | Babs, dani, GaBi, jelly, lexy     |
|            8 |     4003 | 2024-09-29 | FURIA Esports Female | L   | 0.180      | -            | -                | -                | -         |    -0.71 | Babs, dani, GaBi, khizha, REGIANE |
|            7 |     4021 | 2024-09-28 | Thekillaz            | W   | 0.174      | 0.143        | 0.001 (0.000)    | 0.080 (0.002)    | 0 (0.000) |     2.55 | Babs, dani, GaBi, khizha, REGIANE |
|            6 |     4150 | 2024-09-25 | Thekillaz            | W   | 0.154      | 0.323        | 0.001 (0.000)    | 0.080 (0.004)    | 0 (0.000) |     2.27 | Babs, dani, GaBi, jelly, lexy     |
|            5 |     4249 | 2024-09-23 | Atrix Esports        | W   | 0.142      | 0.143        | 0.005 (0.000)    | 0.256 (0.005)    | 0 (0.000) |     2.45 | Babs, dani, GaBi, khizha, REGIANE |
|            4 |     4255 | 2024-09-23 | Peak Academy Female  | W   | 0.141      | 0.143        | 0.001 (0.000)    | 0.139 (0.003)    | 0 (0.000) |     2.10 | Babs, dani, GaBi, khizha, REGIANE |
|            3 |     4404 | 2024-09-18 | Capivaras            | W   | 0.107      | 0.323        | 0.001 (0.000)    | 0.042 (0.001)    | 0 (0.000) |     1.20 | Babs, dani, GaBi, jelly, lexy     |
|            2 |     4609 | 2024-09-11 | Fluxo Demons         | L   | 0.060      | -            | -                | -                | -         |    -0.62 | Babs, dani, GaBi, jelly, lexy     |
|            1 |     4761 | 2024-09-05 | Atrix Esports        | L   | 0.021      | -            | -                | -                | -         |    -0.29 | Babs, dani, GaBi, jelly, lexy     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($884.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-18 |      0.307 | $1,800.00      | $552.75         |
| 2024-09-29 |      0.180 | $1,840.30      | $331.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
